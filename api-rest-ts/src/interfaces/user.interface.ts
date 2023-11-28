import { Auth } from "./auth.interface";

export interface User extends Auth{
    nameusuario : String;
    rut: String;
    region: String;
    comuna: String;
};