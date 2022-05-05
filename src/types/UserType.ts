import {z} from "zod"
import Authenticator from "@/services/Authenticator"

const auth:Authenticator = new Authenticator()

export const UserUpdateType = z.object({
    email : z.string().email(),
    password : z.string().transform(async (arg) =>{return await auth.signup(arg)}),
    username : z.string()
}).partial()

export const UserPostType = z.object({
    email : z.string().email(),
    password : z.string(),
    username : z.string().optional()
})






export type UserUpdate = z.infer<typeof UserUpdateType>
export type UserPost = z.infer<typeof UserPostType>
