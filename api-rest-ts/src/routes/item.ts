import { Router, Request, Response } from "express";
import { deleteItem, getItem, getItems, postItem, putItem } from "../controllers/item";
const router = Router();

router.get("/:id" , getItem );

router.get("/", getItems);

router.post("/", postItem);

router.put("/:id", putItem);

router.delete("/:id",deleteItem);


export { router };
