"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
const logMiddleware = (req, res, next) => {
    console.log("hola soy el middlewaere");
    next();
};
exports.logMiddleware = logMiddleware;
