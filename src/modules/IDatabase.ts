import Actuator from "@/database/actuatorSchema";
import Sensor from "@/database/sensorSchema";
import User from "@/database/userSchema";

const model= {
    user: User,
    actuator: Actuator,
    sensor: Sensor
} 
/*
export interface IDatabase {
    getElementById :(id :string, base : keyof typeof model) => Actuator | Sensor | User | null,
    getAllElement: (base : keyof typeof model) => User[] | Actuator[] | Sensor[] | null,
    postElement: (element : string) => null,
    patchElement: (element: string) => null,
    deleteElement: (id :string, base : keyof typeof model) => null,
}*/