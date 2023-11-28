"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = void 0;
// user.service.ts
const user_model_1 = __importDefault(require("../models/user.model"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseItem = yield user_model_1.default.find({});
        return responseItem;
    }
    catch (error) {
        throw new Error(`Error getting users: ${error.message || error}`);
    }
});
exports.getUsers = getUsers;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseItem = yield user_model_1.default.findOne({ _id: id });
        return responseItem;
    }
    catch (error) {
        throw new Error(`Error getting user: ${error.message || error}`);
    }
});
exports.getUser = getUser;
const updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseItem = yield user_model_1.default.findOneAndUpdate({ _id: id }, data, { new: true });
        return responseItem;
    }
    catch (error) {
        throw new Error(`Error updating user: ${error.message || error}`);
    }
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseItem = yield user_model_1.default.findOneAndDelete({ _id: id });
        return responseItem;
    }
    catch (error) {
        throw new Error(`Error deleting user: ${error.message || error}`);
    }
});
exports.deleteUser = deleteUser;
