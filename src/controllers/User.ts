import { NextFunction, Request, Response } from "express";
import User from "./../database/userSchema"
import { getResponseType } from "./Response"
import { UserPostType, UserUpdateType } from "@/types/UserType"
import Authenticator from "@/services/Authenticator";


export default {
  getUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findById(req.params.id)
      const response = getResponseType("OK", user)
      res.json(response)
      return;
    } catch (error) {
      const response = getResponseType("KO", null, error as Error)
      res.json(response)
      next(error);
    }
  },
  patchUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await UserUpdateType.parseAsync(req.body)
      const user = await User.findByIdAndUpdate(req.params.id, data)
      const response = getResponseType("OK", user)
      res.json(response)
      return;

    } catch (error) {
      console.error(error)
      const response = getResponseType("KO", null, error as Error)
      next(response);
    }
  },
  getAllUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      //console.log("coucou")
      const users = await User.find()
      const response = getResponseType("OK", users)
      res.json(response)
    } catch (error) {
      const response = getResponseType("KO", null, error as Error)
      res.json(response)
      next(error);
    }
  },
  postUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const auth:Authenticator = new Authenticator()
      const parsedUser = UserPostType.parse(req.body)
      const hashPass = await auth.signup(parsedUser.password)

      const data = {
        email: parsedUser.email,
        password: hashPass,
        username: parsedUser.username
      }
      const user = await User.create(data)

      const response = getResponseType("OK", { id: user.id })
      user.save();
      res.json(response)
    } catch (error) {
      const response = getResponseType("KO", null, error as Error)
      next(error)
    }
  },
  deleteUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      const response = getResponseType("OK", user)
      res.json(response);
    } catch (error) {
      const response = getResponseType("KO", null, error as Error)
      res.json(response)
      next(error)
    }
  },
  userLogin: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const auth:Authenticator = new Authenticator()
      const data = {
        email: req.body.email,
        password: req.body.password
      }
      const token = await auth.login(data)

      if (token != "KO") {
        const response = getResponseType("OK", { token: token })
        res.json(response)
      }
      else {
        res.status(403).json({ message: "access_denied" })
      }
    } catch (error) {
      const response = getResponseType("KO")
      console.error(error)
      res.status(403).json(response)

    }
  }


};