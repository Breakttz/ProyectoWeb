import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handler";
import { insertNotice,getNotice, getNotices } from "../services/item.service";
import itemModel from "../models/item";

const getItem = async ({params}: Request, res: Response) => { // obtiene un item
    try {
        const {id} = params;
        const response = await getNotice(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = async (req: Request, res: Response) =>{ // obtiene los item
    try {
        const response = await getNotices();
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}


const putItem = (req: Request, res: Response) => { // udpate item
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_PUT_ITEM')
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const ResponseItem = await insertNotice(body);
        res.send(ResponseItem);
        console.log(`se envió el body ${ResponseItem.titulo}`);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM');
    }
}


const deleteItem = (req: Request, res: Response) => { // elimina el item
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}

export {getItem, getItems, putItem, postItem, deleteItem};