import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
interface RequestExt extends Request{
    user?: string | JwtPayload;
}
const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const [, token] = jwtByUser.split(' ');

        const isUser = verifyToken(token);

        if (!isUser) {
            res.status(401).send("No tienes una sesión válida");
        } else {
            req.user = isUser
            console.log({ jwtByUser });
            next();
        }
    } catch (e) {
        res.status(400).send("Sesión inválida");
    }
};

export { checkJwt };
