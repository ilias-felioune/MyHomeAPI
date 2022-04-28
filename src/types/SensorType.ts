import z from "zod"
import xss from "xss"

enum SensorType{TEMPERATURE = "TEMPERATURE",HUMIDITY="HUMIDITY",BARO="BARO",PROXIMITY="PROXIMITY"}

export const SensorUpdateType = z.object({
    type : z.enum(['TEMPERATURE','HUMIDITY','BARO','PROXIMITY']),
    designation : z.string(),
    rawValue : z.number().or(z.boolean())
}).partial()

export const SensorPostType = z.object({
    type : z.enum(['TEMPERATURE','HUMIDITY','BARO','PROXIMITY']),
    designation : z.string(),
    rawValue : z.number().or(z.boolean())
})



export type SensorPost = z.infer<typeof SensorPostType>