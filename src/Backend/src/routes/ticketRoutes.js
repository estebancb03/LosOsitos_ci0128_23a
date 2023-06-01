import { Router } from "express";
import { insertTicket } from "../models/ticketModel.js";

const router = Router();

router.post("/ticket", insertTicket);

export default router;