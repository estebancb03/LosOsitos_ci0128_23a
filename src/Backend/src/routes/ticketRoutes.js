import { Router } from "express";
import { insertTicket, getPrices, getCRCPrices, getUSDPrices } from "../models/ticketModel.js";

const router = Router();

router.post("/ticket", insertTicket);

router.get("/ticket-prices", getPrices);

router.get("/ticket-prices-crc", getCRCPrices);

router.get("/ticket-prices-usd", getUSDPrices);

export default router;