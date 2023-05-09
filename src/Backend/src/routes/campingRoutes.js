import { Router } from "express";
import { insertCamping } from "../models/campingModel.js";

const router = Router();

router.post('/camping', insertCamping);

export default router;