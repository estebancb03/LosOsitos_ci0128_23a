import { Router } from "express";
import { 
  getReservations,
  getRecordsServices
 } from "../models/reservationListModel.js";

const router = Router();

router.get("/reservation-list/getAllRecords", getReservations);
router.get("/reservation-list/getRecordsServices", getRecordsServices);

export default router;