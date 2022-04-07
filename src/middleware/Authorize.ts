import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"




const authorize = async (req: Request, res: Response, next: NextFunction)=>{
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const payload = jwt.verify(token,process.env.SECRET_KEY!)
        } catch (error) {
            res.status(403).json({ message: "access_denied" });
        }
    }
    else{
        return res.status(403).json({ error: 'No credentials sent!' });
    }
}