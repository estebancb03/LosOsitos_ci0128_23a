import { Router } from "express";
import { getPrices } from "../models/servicesPricesModel.js";

const router = Router();

router.get("/service-prices", getPrices);

export default router;