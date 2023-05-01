import { Router } from "express";
import { getReservations } from "../models/reservationListModel.js";

const router = Router();

router.get("/reservation-list", getReservations);

export default router;