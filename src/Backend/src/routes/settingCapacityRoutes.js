import { Router } from "express";
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js";
import { getActualCapacities, updateCapacity, getExchangeRate } from "../models/settingCapacityModel.js";

const router = Router();

router.get("/getActualCapacities", getActualCapacities)

router.put("/updateCapacity", checkAdminAuth, updateCapacity);

router.get("/getExchangeRate", getExchangeRate);

export default router;