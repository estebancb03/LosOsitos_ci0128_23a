import {Router} from "express"
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js";
import { getAllVehicles, getVehiclesByReservationID, updateVehicle, insertNewVehicle } from "../models/vehicleModel.js";

const router = Router()

router.get("/getAllVehicles", getAllVehicles);

router.get("/getVehiclesByReservationID/:ID/:Reservation_Date", checkOperatorAuth, getVehiclesByReservationID);

router.post("/insertVehicle", checkOperatorAuth, insertNewVehicle);

router.put("/updateVehicle", checkOperatorAuth, updateVehicle);

export default router;