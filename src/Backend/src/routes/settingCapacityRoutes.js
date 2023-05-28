import { Router } from "express";
import { getActualCapacities } from "../models/settingCapacityModel.js";

const router = Router();

router.get("/getActualCapacities", getActualCapacities)

export default router;