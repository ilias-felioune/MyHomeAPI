import { NextFunction, Request, Response } from "express";
import User from "./../database/userSchema"


export default {
  getUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
      return;
    } catch (error) {
      next(error);
    }
  },
  patchUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id,req.body)
      res.json('Successfully update')
      return;
    } catch (error) {
      next(error);
    }
  },
  getAllUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      //console.log("coucou")
      const users = await User.find()
      res.json(users)
    }catch (error) {
      next(error);
    }
  },
  postUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = new User(req.body);
      user.save();
      res.json(user)
    } catch (error) {
      res.send(error)
    }
  },
  deleteUser: async (req: Request, res: Response, next: NextFunction)=>{
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json('Delete');
    } catch (error) {
      res.send(error)
    }
  }

};