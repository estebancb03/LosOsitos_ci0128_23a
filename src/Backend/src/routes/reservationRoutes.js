import { Router } from "express";
import { insertReservation } from "../models/reservationModel.js";

const router = Router();

router.post("/reservation", insertReservation);

export default router;