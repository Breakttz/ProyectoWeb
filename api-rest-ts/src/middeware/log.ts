import { NextFunction, Request, Response } from "express";


const logMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    console.log("hola soy el middlewaere")
    next();
};

export {logMiddleware};