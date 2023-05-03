import { Router } from "express";
import { 
  getReservations,
  getRecordsServices,
  getServicesOptions,
  getAllSpots,
  getAllVehicles
 } from "../models/reservationListModel.js";

const router = Router();

router.get("/getAllRecords", getReservations);
router.get("/getServicesOptions", getServicesOptions);
router.get("/getRecordsServices", getRecordsServices);
router.get("/getAllSpots", getAllSpots);
router.get("/getAllVehicles", getAllVehicles);

export default router;