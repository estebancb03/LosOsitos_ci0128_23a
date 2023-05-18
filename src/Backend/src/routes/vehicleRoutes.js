import {Router} from "express"
import { getAllVehicles, getVehiclesByReservationID, updateVehicle, insertNewVehicle } from "../models/vehicleModel.js";

const router = Router()

router.get("/getAllVehicles", getAllVehicles);

router.get("/getVehiclesByReservationID/:ID/:Reservation_Date", getVehiclesByReservationID);

router.post("/insertVehicle", insertNewVehicle);

router.put("/updateVehicle", updateVehicle);

export default router;