import { Router } from "express";

import {insertClient} from "../models/clientModel.js"

const router = Router();

router.post("/client", insertClient);

export default router;
