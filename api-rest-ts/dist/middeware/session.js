"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const [, token] = jwtByUser.split(' ');
        const isUser = (0, jwt_handle_1.verifyToken)(token);
        if (!isUser) {
            res.status(401).send("No tienes una sesión válida");
        }
        else {
            req.user = isUser;
            console.log({ jwtByUser });
            next();
        }
    }
    catch (e) {
        res.status(400).send("Sesión inválida");
    }
};
exports.checkJwt = checkJwt;
