import { Router } from "express";
import { 
  getReservations,
  getRecordsServices,
  getServicesOptions,
  getSpotsByReservationID,
  getVehiclesByReservationID
 } from "../models/reservationListModel.js";

const router = Router();

router.get("/reservation-list/getAllRecords", getReservations);
router.get("/reservation-list/getServicesOptions", getServicesOptions);
router.get("/reservation-list/getRecordsServices", getRecordsServices);
router.get("/reservation-list/getSpotsByReservationID", getSpotsByReservationID);
router.get("/reservation-list/getVehiclesByReservationID", getVehiclesByReservationID);

export default router;