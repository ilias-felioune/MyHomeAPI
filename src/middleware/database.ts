import { NextFunction, Request, Response } from "express";
import { Document, Model, model, Types, Schema, Query } from "mongoose"
import mongoose from "mongoose";


const dbConnectLink = 'mongodb+srv://ilias-felioune:APIdatabase@cluster0.wri8v.mongodb.net/smarthome?retryWrites=true&w=majority'
const dbConnectLinkLocal ='mongodb://localhost:27017/smarthome';

const dbConnect = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        await mongoose.connect(dbConnectLinkLocal)
        console.log("Successfuly connected to MongoDB")
        next()

    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default dbConnect



