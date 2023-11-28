import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        nameusuario :{
            type:String,
            require:true,
            unique:true,
        },
        rut:{
            type:String,
            require:true,
        },
        region:{
            type:String,
            require:true,
        },
        comuna:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            require:true,
            unique:true,
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const UserModel = model('users',UserSchema)

export  default UserModel;