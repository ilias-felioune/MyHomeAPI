import { Document, Model, model, Types, Schema, Query } from "mongoose"
import mongoose from "mongoose"

interface User {
    email: string;
    password: string;
    username:string;
}

export const UserSchema = new Schema<User>({
    email: String,
    password: String,
    username:String
});

const User = mongoose.model('User',UserSchema);

export default User