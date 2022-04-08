import { NextFunction, Request, Response } from "express";
import User from "./../database/userSchema"
import {getResponseType} from "./Response"
import {hashPassword,login} from "../modules/Login"


export default {
  getUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findById(req.params.id)
      const response = getResponseType("OK",user)
      res.json(response)
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },
  patchUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id,req.body)
      const response = getResponseType("OK",user)
      res.json(response)
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },
  getAllUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      //console.log("coucou")
      const users = await User.find()
      const response = getResponseType("OK",users)
      res.json(response)
    }catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },
  postUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hashPass = await hashPassword(req.body.password)

      const data={
        email: req.body.email,
        password: hashPass,
        username: req.body.username
      }
      const user = await User.create(data)

      const response = getResponseType("OK",{id:user.id})
      user.save();
      res.json(response)
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error)
    }
  },
  deleteUser: async (req: Request, res: Response, next: NextFunction)=>{
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      const response = getResponseType("OK",user)
      res.json(response);
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error)
    }
  },
  userLogin: async (req: Request, res: Response, next: NextFunction)=>{
    try {
      const data = {
        email:req.body.email,
        password:req.body.password
      }
      const token = await login(data)

      if (token != "KO"){
        const response = getResponseType("OK",{token:token})
        res.json(response)
      }
      else{
        res.status(403).json({ message: "access_denied" })
      }
    } catch (error) {
        const response = getResponseType("KO")
        console.error(error)
        res.status(403).json(response)

    }
  }
  

};