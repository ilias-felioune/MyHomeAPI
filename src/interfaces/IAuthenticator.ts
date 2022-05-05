import { IUser } from "@/database/userSchema";


export default interface IAuthenticator {
    login :(userLogin:IUser) => Promise<string | null>,
    signup :(password:string)=> Promise<string | null>,
    authorizeUser:(token: string, id?:string, role?:string)=> Promise<{valid:boolean,id:string}> 
}

