import { Router } from "express";
import { insertReservationTicket } from "../models/ticketReservationModel.js";

const router = Router();

router.post("/reservationTicket", insertReservationTicket);

export default router;