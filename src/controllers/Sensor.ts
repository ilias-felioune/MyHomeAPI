import { NextFunction, Request, Response } from "express";
import Sensor from "@/database/sensorSchema"

export default {
  getAllSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.find();
      res.json(sensor);
      return;
    } catch (error) {
      next(error);
    }
  },
  getSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.findById(req.params.id);
      res.json(sensor);
      return;
    } catch (error) {
      next(error);
    }
  },
  postSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = new Sensor(req.body);
      sensor.save();
      res.json(sensor)
      return;
    } catch (error) {
      next(error);
    }
  },
  patchSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Sensor.findByIdAndUpdate(req.params.id,req.body);
      res.send('OK');
      return;
    } catch (error) {
      next(error);
    }
  },
  deleteSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await Sensor.findByIdAndDelete(req.params.id);
      res.send('OK');
      return;
    } catch (error) {
      next(error);
    }
  },

};