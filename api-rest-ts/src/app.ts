import express from "express";
import cors from "cors";
import "dotenv/config";
import {router} from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json()); // Agrega esta línea para analizar cuerpos JSON
app.use(router);
db().then(() => console.log("conexion bd ready"));

app.listen(PORT,()=> console.log(`listo por el puerto ${PORT}`))
