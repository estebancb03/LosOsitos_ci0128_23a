import { Router } from "express";
import {
  insertReservation,
  getReservations,
  getMainInfoByReservationID,
  getRecordsServices,
  getStateByReservationID,
  updateState,
  deleteReservation
} from "../models/reservationModel.js";

const router = Router();

router.get("/getAllRecords", getReservations);

router.get("getMainInfoByReservationID/:ID", getMainInfoByReservationID)

router.get("/getRecordsServices", getRecordsServices);

router.get("/getStateByReservationID/:ID/:Reservation_Date", getStateByReservationID);

router.put("/updateState", updateState);

router.post("/reservation", insertReservation);

router.delete("/reservation/:ID/:Reservation_Date", deleteReservation);

export default router;