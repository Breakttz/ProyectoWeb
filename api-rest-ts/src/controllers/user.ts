import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handler";

const getItem = (req: Request, res: Response) => { // obtiene un item
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_GET_USER')
    }
}

const getItems = (req: Request, res: Response) =>{ // obtiene los item
     try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_GET_USER')
    }
}


const putItem = (req: Request, res: Response) => { // udpate item
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_PUT_USER')
    }
}

const postItem = ( { body } : Request, res: Response) => { // para insertar item
    try {
        res.send(body);
        console.log(`se envio el body ${body}`);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_USER')
    }
}


const deleteItem = (req: Request, res: Response) => { // elimina el item
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_USER')
    }
}

export {getItem, getItems, putItem, postItem, deleteItem};