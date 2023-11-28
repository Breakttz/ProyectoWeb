// user.service.ts
import UserModel from "../models/user.model";
import { User } from "../interfaces/user.interface";

const getUsers = async () => {
  try {
    const responseItem = await UserModel.find({});
    return responseItem;
  } catch (error: any) {
    throw new Error(`Error getting users: ${error.message || error}`);
  }
};

const getUser = async (id: string) => {
  try {
    const responseItem = await UserModel.findOne({ _id: id });
    return responseItem;
  } catch (error: any) {
    throw new Error(`Error getting user: ${error.message || error}`);
  }
};

const updateUser = async (id: string, data: User) => {
  try {
    const responseItem = await UserModel.findOneAndUpdate(
      { _id: id },
      data,
      { new: true }
    );
    return responseItem;
  } catch (error: any) {
    throw new Error(`Error updating user: ${error.message || error}`);
  }
};

const deleteUser = async (id: string) => {
  try {
    const responseItem = await UserModel.findOneAndDelete({ _id: id });
    return responseItem;
  } catch (error: any) {
    throw new Error(`Error deleting user: ${error.message || error}`);
  }
};

export { getUsers, getUser, updateUser, deleteUser };
