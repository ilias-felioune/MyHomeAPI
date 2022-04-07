import { NextFunction, Request, Response } from "express";
import Actuator from "@/database/actuatorSchema";
import { getResponseType } from "./Response";

export default {
  getAllActuator: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.find();
      const response = getResponseType("OK",actuator)
      res.json(response);
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },
  getActuator: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.findById(req.params.id);
      const response = getResponseType("OK",actuator)
      res.json(response);
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },
  postActuator: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = new Actuator(req.body);
      const response = getResponseType("OK",actuator)
      await actuator.save();
      res.json(response);
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },
  patchActuator: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.findByIdAndUpdate(req.params.id,req.body);
      const response = getResponseType("OK",actuator)
      res.json(response);
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },
  deleteActuator: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.findByIdAndDelete(req.params.id,req.body)
      const response = getResponseType("OK",actuator)
      res.json(response)
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },

};


