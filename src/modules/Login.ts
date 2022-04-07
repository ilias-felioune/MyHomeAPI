import argon2, { hash } from "argon2"
import User from "../database/userSchema"
import jwt from "jsonwebtoken"

async function hashPassword(password:string){
    try {
        const hashPassword = await argon2.hash(password)
        return hashPassword
    } catch (err) {
        return "KO"
    }
}


async function login(userLogin:User){
    try {
        const userDB = await User.findOne({email:userLogin.email})
        if (!userDB){
            throw new Error("aucun user dans le database");
        }
        if (await argon2.verify(userDB.password,userLogin.password)) {
            const token =jwt.sign({id:userDB.id},process.env.SECRET_KEY!)
            return token

          } else {
            return "KO"
          }
    } catch (error) {
        return "KO"
    }
}






export {hashPassword}