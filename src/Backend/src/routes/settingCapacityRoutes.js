import { Router } from "express";
import { getActualCapacities, updateCapacity } from "../models/settingCapacityModel.js";

const router = Router();

router.get("/getActualCapacities", getActualCapacities)

router.put("/updateCapacity", updateCapacity);

export default router;