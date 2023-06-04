import { Router } from "express";
import { getSpotPrices } from "../models/spotPriceModel.js";

const router = Router();

router.get("/spot-prices", getSpotPrices);

export default router;
