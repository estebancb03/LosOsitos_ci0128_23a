import { Router } from "express";
import { insertTicket, getPrices, updateTicketPrice } from "../models/ticketModel.js";

const router = Router();

router.post("/ticket", insertTicket);

router.get("/ticket-prices", getPrices);

router.put("/ticket-updatePrice", updateTicketPrice);

export default router;