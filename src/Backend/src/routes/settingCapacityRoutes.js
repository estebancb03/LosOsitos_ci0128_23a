import { Router } from "express";
import { getActualCapacities, updateCapacity, getExchangeRate } from "../models/settingCapacityModel.js";

const router = Router();

router.get("/getActualCapacities", getActualCapacities)

router.put("/updateCapacity", updateCapacity);

router.get("/getExchangeRate", getExchangeRate);

export default router;