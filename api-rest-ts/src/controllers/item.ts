import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handler";
import { insertNotice,getNotice, getNotices, udpateNotice, deleteNotice } from "../services/item.service";
import itemModel from "../models/item";

const getItem = async ({params}: Request, res: Response) => { // obtiene un item
    try {
        const {id} = params;
        const response = await getNotice(id);
        const data = response ? response : "NOT_FOUND";
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


const putItem = async ({params,body}: Request, res: Response) => { // udpate item
    try {
        const {id} = params;
        const response = await udpateNotice(id,body);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_PUT_ITEM')
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const ResponseItem = await insertNotice(body);
        res.send(ResponseItem);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM');
    }
}


const deleteItem = async ({params}: Request, res: Response) => { // elimina el item
    try {
        const {id} = params;
        const response = await deleteNotice(id);
        res.send(response)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}

export {getItem, getItems, putItem, postItem, deleteItem};