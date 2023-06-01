import { Router } from "express";
import { getAllTickets, insertReservationTicket, updateTicket, getTicketsByReservationID } from "../models/ticketReservationModel.js";

const router = Router();

router.get("/getAllTickets", getAllTickets);

router.get("/getTicketsByReservationID/:ID/:Reservation_Date", getTicketsByReservationID);

router.post("/reservationTicket", insertReservationTicket);

router.put("/updateTicket", updateTicket);

export default router;