import { NextFunction, Request, Response } from "express";
import Actuator from "@/database/actuatorSchema";
import { getResponseType } from "./Response";
import {ActuatorPostType, ActuatorUpdateType} from "@/types/ActuatorType"

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
      const parsedActuator = ActuatorPostType.parse(req.body) 
      const actuator = new Actuator(parsedActuator);
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
      const parsedActuator = ActuatorUpdateType.parse(req.body)
      const actuator = await Actuator.findByIdAndUpdate(req.params.id,parsedActuator);
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
      const actuator = await Actuator.findByIdAndDelete(req.params.id)
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


