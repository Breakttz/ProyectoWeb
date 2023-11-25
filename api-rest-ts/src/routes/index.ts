import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

export const router =Router();

const cleanFileName = (filename:string) =>{

    const file = filename.split('.').shift()
    return file;
}

readdirSync(PATH_ROUTER).filter((Filename)=>{
    const cleanName = cleanFileName(Filename);
    if (cleanName!== "index"){
        import(`./${cleanName}`).then((moduleRouter)=>{
            console.log(`se esta cargando /${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

