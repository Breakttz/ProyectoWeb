// solo personas con sesion activa//

import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middeware/session";
const  router = Router();

router.get('/',checkJwt,getItems)

export {router};
