import { Router } from "express";
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js"
import { getActualCapacities, updateCapacity } from "../models/settingCapacityModel.js";

const router = Router();

router.get("/getActualCapacities", getActualCapacities)

router.put("/updateCapacity", checkAdminAuth, updateCapacity);

export default router;