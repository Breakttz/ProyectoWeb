import { Response,Request } from "express";
import { loginUser,registerNewUser } from "../services/auth.service"; 


const registerCtrl = async ({body}: Request, res: Response) => {
    console.log("CONTROLADOR ")
    const responseUser = await registerNewUser(body);
    res.send(responseUser);

};

const loginCtrl =async ({body}: Request, res: Response) => {
    const {email,password} = body
    const responseUser = await loginUser({email,password});
    res.send(responseUser);
};

export {registerCtrl, loginCtrl};