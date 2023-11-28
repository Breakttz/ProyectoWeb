// users.controller.ts
import { Request, Response } from 'express';
import { deleteUser, getUsers, getUser, updateUser } from '../services/user.service';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getSingleUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const user = await getUser(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const updatedUserData = req.body; // Asume que los datos actualizados están en el cuerpo de la solicitud

  try {
    const updatedUser = await updateUser(userId, updatedUserData);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const deletedUser = await deleteUser(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
