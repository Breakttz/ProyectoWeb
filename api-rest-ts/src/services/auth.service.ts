import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/bscrypt.handle";
import { generateToken } from "../utils/jwt.handle";



const registerNewUser = async ({email, password,nameusuario}: User) => {
    const checkIs = await UserModel.findOne({email});
    if (checkIs) return "ALREADY USER";
    const passHash = await encrypt(password);
    const newUser = await UserModel.create({email,password:passHash,nameusuario});
    return newUser;
};

const loginUser = async ({email,password}:Auth) => {
    const checkIs = await UserModel.findOne({email});
    if (!checkIs) return "DATOS INCORRECTOS";
   
    const passwordHash = checkIs.password;
    const isCorrect = await verified(password,passwordHash);
    if (!isCorrect) return "password incorrecto"
    
    const token = generateToken(checkIs.id);   
    const data = {
        token,
        user:checkIs,
    }
    return data;
};

export {registerNewUser,loginUser};