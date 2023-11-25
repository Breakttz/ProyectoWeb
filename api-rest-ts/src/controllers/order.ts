import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handler";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request{
    user?: string | JwtPayload;
}

const getItems = async (req: RequestExt, res: Response) =>{ // obtiene los item
    try {
        res.send({data:"esto solo lo ve las personas inicion sesison",
        user: req.user,
    })
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
} 

export {getItems};