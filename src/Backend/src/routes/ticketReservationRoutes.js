import { Router } from "express";
import { getAllTickets, getCampingCapacity, getPicnicCapacity, insertReservationTicket, updateTicket, getTicketsByReservationID, deleteTicket } from "../models/ticketReservationModel.js";


const router = Router();

router.get("/getAllTickets", getAllTickets);

router.get("/getTicketsByReservationID/:ID/:Reservation_Date", getTicketsByReservationID);

router.get("/getCampingCapacity/:date", getCampingCapacity);

router.get("/getPicnicCapacity/:date", getPicnicCapacity);

router.post("/reservationTicket", insertReservationTicket);

router.put("/updateTicket", updateTicket);

router.delete("/deleteTicket", deleteTicket);

export default router;