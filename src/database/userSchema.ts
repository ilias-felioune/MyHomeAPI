import { Document, Model, model, Types, Schema, Query } from "mongoose"
import mongoose from "mongoose"


interface User {
    email: string;
    password: string;
    username:string;
}

export const UserSchema = new Schema<User>({
    email: String,
    password: { type: String, select: false },
    username:String,
    
},{versionKey:false}
);

UserSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
});

const User = mongoose.model('User',UserSchema);

export default User