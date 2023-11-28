"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// user.routes.ts
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
exports.router = router;
// Rutas para los usuarios
router.get('/user', user_1.getAllUsers);
router.get('/users/:id', user_1.getSingleUser);
router.put('/users/:id', user_1.updateUserById);
router.delete('/users/:id', user_1.deleteUserById);
