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
exports.loginUser = exports.registerNewUser = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bscrypt_handle_1 = require("../utils/bscrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const registerNewUser = ({ email, password, nameusuario }) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIs = yield user_model_1.default.findOne({ email });
    if (checkIs)
        return "ALREADY USER";
    const passHash = yield (0, bscrypt_handle_1.encrypt)(password);
    const newUser = yield user_model_1.default.create({ email, password: passHash, nameusuario });
    return newUser;
});
exports.registerNewUser = registerNewUser;
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIs = yield user_model_1.default.findOne({ email });
    if (!checkIs)
        return "DATOS INCORRECTOS";
    const passwordHash = checkIs.password;
    const isCorrect = yield (0, bscrypt_handle_1.verified)(password, passwordHash);
    if (!isCorrect)
        return "password incorrecto";
    const token = (0, jwt_handle_1.generateToken)(checkIs.id);
    const data = {
        token,
        user: checkIs,
    };
    return data;
});
exports.loginUser = loginUser;
