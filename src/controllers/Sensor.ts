import { NextFunction, Request, Response } from "express";
import Sensor from "@/database/sensorSchema"
import { getResponseType } from "./Response";
import {getTypeSensorValue} from "../modules/SensorValue"

export default {
  getAllSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensors = await Sensor.find();

      const sensorRes = sensors.map(({designation, type, rawValue}: Sensor)=> {
        return {
          designation,
          type,
          rawValue,
          value:getTypeSensorValue(type,rawValue)

        }
      })

      console.log(sensorRes)
      const response = getResponseType("OK",sensorRes)
      res.json(response);
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },
  getSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.findById(req.params.id);
      //sensor.value = getTypeSensorValue(sensor.type,sensor.rawValue)
      const sensorRes = {
        type:sensor.type,
        designation:sensor.designation,
        value:getTypeSensorValue(sensor.type,sensor.rawValue)
      }
      const response = getResponseType("OK",sensorRes)
      res.json(response);
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },
  postSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = new Sensor(req.body);
      const response = getResponseType("OK",sensor)
      sensor.save();
      res.json(response)
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },
  patchSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.findByIdAndUpdate(req.params.id,req.body);
      const response = getResponseType("OK",sensor)
      res.json(response);
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },
  deleteSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensor = await Sensor.findByIdAndDelete(req.params.id);
      const response = getResponseType("OK",sensor)
      res.json(response);
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      res.json(response)
      next(error);
    }
  },

};