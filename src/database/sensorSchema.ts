import { Document, Model, model, Types, Schema, Query } from "mongoose"
import mongoose from "mongoose"

//Interface Sensor
enum SensorType{TEMPERATURE = "TEMPERATURE",HUMIDITY="HUMIDITY",BARO="BARO",PROXIMITY="PROXIMITY"}
interface Sensor{
    type: string,
    designation : string,
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

SensorSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
});

const Sensor = mongoose.model('Sensor',SensorSchema)

export default Sensor