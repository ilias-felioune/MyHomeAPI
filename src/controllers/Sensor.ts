import { NextFunction, Request, Response } from "express";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "method sensorGet[]" });
      return;
    } catch (error) {
      next(error);
    }
  },
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "method sensorGet" });
      return;
    } catch (error) {
      next(error);
    }
  },
  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "method sensorPost" });
      return;
    } catch (error) {
      next(error);
    }
  },
  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "method sensorUpdate" });
      return;
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "method sensorDelete" });
      return;
    } catch (error) {
      next(error);
    }
  },

};