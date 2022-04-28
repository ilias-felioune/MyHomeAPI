import {z} from "zod"

export const ActuatorUpdateType = z.object({
    type : z.enum(["BLINDS","LIGHT"]),
    designation : z.string(),
    state : z.boolean()
}).partial()

export const ActuatorPostType = z.object({
    type : z.enum(["BLINDS","LIGHT"]),
    designation : z.string(),
    state : z.boolean()
})




export type ActuatorUpdate = z.infer<typeof ActuatorUpdateType>
export type ActuatorPost = z.infer<typeof ActuatorPostType>