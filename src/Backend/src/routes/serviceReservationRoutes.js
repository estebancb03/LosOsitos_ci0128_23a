import {Router} from "express"
import {getAllServices, getServicesByReservationID, updateService} from "../models/serviceReservationModel.js"

const router = Router();

router.get("/getAllServices", getAllServices);

router.get("/getServicesByReservationID/:ID/:Reservation_Date", getServicesByReservationID);

router.put("/updateService", updateService);

export default router;