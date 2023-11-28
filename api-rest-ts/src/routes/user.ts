// user.routes.ts
import { Router } from "express";
import { deleteUserById, getAllUsers, getSingleUser, updateUserById } from '../controllers/user';

const  router = Router();

// Rutas para los usuarios
router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

export {router};
