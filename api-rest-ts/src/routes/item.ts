import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    // Tu lógica para manejar la solicitud GET '/items' va aquí
    res.send('Respuesta para la ruta /items');
});

export { router };
