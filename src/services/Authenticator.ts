import User, { IUser } from "@/database/userSchema";
import IAuthenticator from "@/interfaces/IAuthenticator";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

class Authenticator implements IAuthenticator{

    async login(userLogin: IUser){
        const userDB = await User.findOne({email:userLogin.email}).select("+password")
        if (!userDB){
            throw new Error("aucun user dans le database");
        }
        if (await argon2.verify(userDB.password,userLogin.password)) {
            const token = jwt.sign({id:userDB.id},process.env.SECRET_KEY!)
            return token

            } 
        else {
            throw new Error("aucun user dans le database");
        }
    }
    async signup(password: string){
        try {
            const hashPassword = await argon2.hash(password)
            return hashPassword
        } catch (err) {
            return "KO"
        }
    }
    async authorizeUser(token: string, id?: string | undefined, role?: string | undefined){
        try {
            const payload = jwt.verify(token,process.env.SECRET_KEY!) as {id:string}
            console.log(payload.id)
            if (id) {
                const valid = id==payload.id
                return {valid:valid,id:payload.id}
            }
            return {valid:true,id:payload.id}
        } catch (error) {
            return {valid:false,id:"null"}
        } 
        return {valid:false,id:"null"}
    }

    

    

    
}
export default Authenticator


