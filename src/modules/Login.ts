import argon2, { hash } from "argon2"
import jwt from "jsonwebtoken"
import User, { IUser } from "../database/userSchema"


async function hashPassword(password:string){
    try {
        const hashPassword = await argon2.hash(password)
        return hashPassword
    } catch (err) {
        return "KO"
    }
}


async function login(userLogin:IUser){
    
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






export {hashPassword,login}