import { Router } from "express";
import { insertReservationTicket } from "../models/ticketReservationModel";

const router = Router();

router.post("/reservationTicket", insertReservationTicket);

export default router;