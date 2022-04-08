import { hashPassword } from "@/modules/Login"
import {z} from "zod"


export const UserUpdateType = z.object({
    email : z.string().email(),
    password : z.string().transform(async (arg) =>{return await hashPassword(arg)}),
    username : z.string()
}).partial()

export const UserPostType = z.object({
    email : z.string().email(),
    password : z.string(),
    username : z.string().optional()
})






export type UserUpdate = z.infer<typeof UserUpdateType>
export type UserPost = z.infer<typeof UserPostType>
