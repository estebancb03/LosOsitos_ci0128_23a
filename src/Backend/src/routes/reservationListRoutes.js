import { Router } from "express";
import { 
  getReservations,
  getServicesNames
 } from "../models/reservationListModel.js";

const router = Router();

router.get("/reservation-list/getAllRecords", getReservations);
router.get("/reservation-list/getServicesNames", getServicesNames);

export default router;