import { NextFunction, Request, Response } from "express";

export default {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "method actuatorGet[]" });
      return;
    } catch (error) {
      next(error);
    }
  },
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "method actuatorGet" });
      return;
    } catch (error) {
      next(error);
    }
  },
  post: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "method actuatorPost" });
      return;
    } catch (error) {
      next(error);
    }
  },
  patch: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "method actuatorUpdate" });
      return;
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "method actuatorDelete" });
      return;
    } catch (error) {
      next(error);
    }
  },

};