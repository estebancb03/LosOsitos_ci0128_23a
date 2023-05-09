import { Router } from "express";
import { insertPicnic } from "../models/picnicModel.js";

const router = Router();

router.post('/picnic', insertPicnic);

export default router;