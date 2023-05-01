import { Router } from "express";
import { 
  getReservations,
  getRecordsServices,
  getServicesOptions
 } from "../models/reservationListModel.js";

const router = Router();

router.get("/reservation-list/getAllRecords", getReservations);
router.get("/reservation-list/getServicesOptions", getServicesOptions);
router.get("/reservation-list/getRecordsServices", getRecordsServices);

export default router;