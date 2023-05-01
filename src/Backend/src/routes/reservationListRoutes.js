import { Router } from "express";
import { getReservations } from "../models/reservationListModel.js";

const router = Router();

router.get("/reservation-list/getAllRecords", getReservations);

export default router;