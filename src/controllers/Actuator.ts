import { NextFunction, Request, Response } from "express";
import Actuator from "@/database/actuatorSchema";

export default {
  getAllActuator: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.find();
      res.send(actuator);
      return;
    } catch (error) {
      next(error);
    }
  },
  getActuator: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = await Actuator.findById(req.params.id);
      res.send(actuator);
      return;
    } catch (error) {
      next(error);
    }
  },
  postActuator: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const actuator = new Actuator(req.body);
      await actuator.save();
      res.send('OK');
      return;
    } catch (error) {
      next(error);
    }
  },
  patchActuator: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Actuator.findByIdAndUpdate(req.params.id,req.body);
      res.send('OK');
      return;
    } catch (error) {
      next(error);
    }
  },
  deleteActuator: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Actuator.findByIdAndDelete(req.params.id,req.body)
      res.send('OK')
      return;
    } catch (error) {
      next(error);
    }
  },

};