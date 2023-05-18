import { Router } from "express";
import { getAllTickets, insertReservationTicket, updateTicket } from "../models/ticketReservationModel.js";

const router = Router();

router.get("/getAllTickets", getAllTickets);

router.post("/reservationTicket", insertReservationTicket);

router.put("/updateTicket", updateTicket);

export default router;