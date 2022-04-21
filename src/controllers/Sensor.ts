import { NextFunction, Request, Response } from "express";
import Sensor from "@/database/sensorSchema"
import { getResponseType } from "./Response";
import {getTypeSensorValue} from "../modules/SensorValue"
import {SensorPostType,SensorUpdateType} from "@/types/SensorType"
import xss from "xss";

export default {
  getAllSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sensors = await Sensor.find();

      const sensorRes = sensors.map(({id, designation, type, rawValue})=> {
        return {
          id,
          designation,
          type,
          rawValue,
          value:getTypeSensorValue(type,rawValue)

        }
      })

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
      if (!sensor){
        throw new Error("Sensor not found")
      }
      //sensor.value = getTypeSensorValue(sensor.type,sensor.rawValue)
      const sensorRes = {
        id:sensor.id,
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
      const parsedSensor = SensorPostType.parse(sensor)
      const response = getResponseType("OK",parsedSensor)
      const newSensor = new Sensor(parsedSensor)
      newSensor.save();
      res.json(response)
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      console.error(error)
      next(response);
    }
  },
  patchSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedSensor = SensorUpdateType.parse(req.body)
      const sensor = await Sensor.findByIdAndUpdate(req.params.id,parsedSensor);
      const response = getResponseType("OK",sensor)
      res.json(response);
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      next(response);
    }
  },
  deleteSensor: async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.params.id)
      const sensor = await Sensor.findByIdAndDelete(req.params.id);
      const response = getResponseType("OK",sensor)
      res.json(response);
      return;
    } catch (error) {
      const response = getResponseType("KO",null,error as Error)
      next(response);
    }
  },

};