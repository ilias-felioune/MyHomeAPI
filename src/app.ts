import { NextFunction, Request, Response } from "express";
import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import 'dotenv/config'

// Routers
import indexRouter from "@/routes/Index";
import userRouter from "@/routes/User";
import sensorRouter from "@/routes/Sensor";
import actuatorRouter from "@/routes/Actuator";
import dbConnect from "@/middleware/database";
import { preventionXss } from "./middleware/AttackPrevention";



const app = express();





// view engine setup
app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(preventionXss);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(dbConnect);

app.use("/", indexRouter);
app.use("/user",userRouter);
app.use("/sensor",sensorRouter);
app.use("/actuator",actuatorRouter);

// catch 404
app.use(function (req: Request, res: Response, next: NextFunction) {
  // handle it how it pleases you
  res.status(404).json({ message: "not_found" });
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500).json(err);
  
});

export default app;
