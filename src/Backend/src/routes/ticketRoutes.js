import { Router } from "express";
import { insertTicket, getPrices } from "../models/ticketModel.js";

const router = Router();

router.post("/ticket", insertTicket);

router.get("/ticket-prices", getPrices);

export default router;