import { Schema, Types, model, Model } from "mongoose";
import { Notice } from "../interfaces/notice.interface";

const itemSchema = new Schema<Notice>(
    {
        titulo : {
            type: String,
        },
        descripcion: {
            type: String,
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const itemModel = model('items',itemSchema)

export  default itemModel;