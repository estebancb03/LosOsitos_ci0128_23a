import { Router } from "express";
import { getPrices } from "../models/ticketPricesModel.js";

const router = Router();

router.get("/ticket-prices", getPrices);

export default router;