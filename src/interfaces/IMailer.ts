import { IUser } from "@/database/userSchema";


export default interface IMailer {
    send:(fromEmail:string, toEmail:string, pass:string, subject:string, text:string)=> Promise<{valid:boolean,id:string}> 
}

