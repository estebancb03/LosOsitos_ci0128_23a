import { Router } from "express";
import { 
  getReservations,
  getRecordsServices,
  getServicesOptions,
  getSpotsByReservationID,
  getVehiclesByReservationID,
  getMainInfoByReservationID
 } from "../models/reservationListModel.js";

const router = Router();

router.get("/getAllRecords", getReservations);
router.get("/getServicesOptions", getServicesOptions);
router.get("/getRecordsServices", getRecordsServices);
router.get("/getSpotsByReservationID", getSpotsByReservationID);
router.get("/getVehiclesByReservationID", getVehiclesByReservationID);

export default router;