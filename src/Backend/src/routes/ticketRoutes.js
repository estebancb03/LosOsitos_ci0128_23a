import { Router } from "express";
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js"
import { insertTicket, getPrices, updateTicketPrice, getCRCPrices, getUSDPrices, getPriceByARDGCurrency } from "../models/ticketModel.js";

const router = Router();

router.post("/ticket", insertTicket);

router.get("/ticket-prices", getPrices);

router.put("/ticket-updatePrice", checkAdminAuth, updateTicketPrice);

router.get("/ticket-prices-crc", getCRCPrices);

router.get("/ticket-prices-usd", getUSDPrices);

router.get("/ticket-prices-ardgcurrency/:Age_Range/:Demographic_Group/:Reservation_Type/:Currency", getPriceByARDGCurrency);

export default router;