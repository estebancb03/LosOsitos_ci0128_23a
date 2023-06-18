import { Router } from "express";
import { postOcupation } from "../models/parkStatusModel.js";
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/Ocupation", checkOperatorAuth, postOcupation);

export default router;
