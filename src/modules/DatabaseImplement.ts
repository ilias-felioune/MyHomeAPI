import Actuator from "@/database/actuatorSchema";
import Sensor from "@/database/sensorSchema";
import User from "@/database/userSchema";
import { Model } from "mongoose";
//import { IDatabase } from "./IDatabase";

const model= {
    user: User,
    actuator: Actuator,
    sensor: Sensor
} 
/*
class Database implements IDatabase{
    getElementById: (id: string, base: "user" | "actuator" | "sensor") => User | Actuator | Sensor | null;
    getAllElement: (base: string) => User[] | Actuator[] | Sensor[] | null;
    postElement: (element: string) => null;
    patchElement: (element: string) => null;
    deleteElement: (id: string, base: string) => null;
}
*/

 

