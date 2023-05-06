import { Router } from "express";
import { 
  getReservations,
  getRecordsServices,
  getServicesOptions,
  getAllSpots,
  getAllVehicles,
  getAllTickets,
  getAllServices,
  updatePersonData,
  updateStartEndDates,
  getVehiclesByReservationID,
  updateVehicle,
  getSpotsByReservationID,
  updateSpot,
  getTicketsByReservationID
 } from "../models/reservationListModel.js";

const router = Router();

router.get("/getAllRecords", getReservations);
router.get("/getServicesOptions", getServicesOptions);
router.get("/getRecordsServices", getRecordsServices);
router.get("/getAllSpots", getAllSpots);
router.get("/getAllVehicles", getAllVehicles);
router.get("/getAllTickets", getAllTickets);
router.get("/getAllServices", getAllServices);
router.get("/getVehiclesByReservationID/:ID/:Reservation_Date", getVehiclesByReservationID);
router.get("/getSpotsByReservationID/:ID/:Reservation_Date", getSpotsByReservationID);
router.get("/getTicketsByReservationID/:ID/:Reservation_Date", getTicketsByReservationID);
router.put("/updatePersonData", updatePersonData);
router.put("/updateStartEndDates", updateStartEndDates);
router.put("/updateVehicle", updateVehicle);
router.put("/updateSpot", updateSpot);

export default router;