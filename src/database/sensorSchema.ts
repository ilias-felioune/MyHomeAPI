import { Document, Model, model, Types, Schema, Query } from "mongoose"
const mongoose = require('mongoose');

//Interface Sensor
enum SensorType{TEMPERATURE = "TEMPERATURE",HUMIDITY="HUMIDITY",BARO="BARO",PROXIMITY="PROXIMITY"}
interface Sensor{
    type: String,
    designation : String,
    rawValue : number | boolean,
}

//Schema Sensor
export const SensorSchema = new Schema<Sensor>({
    type :{
        type:String,
        enum:['TEMPERATURE','HUMIDITY','BARO','PROXIMITY']
    },
    designation:String,
    rawValue: Schema.Types.Mixed,
})

const Sensor = mongoose.model('Sensor',SensorSchema)

export default Sensor