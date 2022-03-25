import { Document, Model, model, Types, Schema, Query } from "mongoose"
const mongoose = require('mongoose');

//Interface Actuator
enum ActuatorType {BLINDS="BLINDS",LIGHT="LIGHT"}
interface Actuator {
    type : String,
    designation : string,
    state : boolean,
}

//Schema Actuator
export const ActuatorSchema = new Schema<Actuator>({
    type :{
        type:String,
        enum :['BLINDS','LIGHT']
    },
    designation:String,
    state:Boolean,
})


const Actuator = mongoose.model('Actuator',ActuatorSchema);

export default Actuator

