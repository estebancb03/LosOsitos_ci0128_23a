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
router.get("/getSpotsByReservationID/:ID/:Reservation_Date", getSpotsByReservationID);
router.get("/getVehiclesByReservationID/:ID/:Reservation_Date", getVehiclesByReservationID);
router.get("/getMainInfoByReservationID/:ID/:Reservation_Date", getMainInfoByReservationID);

export default router;