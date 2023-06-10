import { Router } from "express";
import { postOcupation } from "../models/parkStatusModel.js";

const router = Router();

router.post("/Ocupation",postOcupation);

export default router;
