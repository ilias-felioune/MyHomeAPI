import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import User from "../database/userSchema"
import {getResponseType} from "@/controllers/Response"





const authorize = async (req: Request, res: Response, next: NextFunction)=>{
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const payload = await jwt.verify(token,process.env.SECRET_KEY!) as {id:string}
            User.findById(payload.id, (err:Error,user:typeof User)=>{
                if (err){
                    res.status(500).send(getResponseType("KO",err))
                }
                if (user){
                    next()
                }
                else{
                    res.status(500)
                }
            })
        } catch (error) {
            res.status(403).json({ message: "access_denied",error:error });
        }
    }
    else{
        return res.status(403).json({ error: 'No credentials sent!' });
    }
}

export default {authorize}