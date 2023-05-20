import {Router} from "express"
import {
  insertService,
  getAllServices,
  getServicesByReservationID,
  updateService
} from "../models/serviceReservationModel.js"

const router = Router();

router.get("/getAllServices", getAllServices);
router.get("/getServicesByReservationID/:ID/:Reservation_Date", getServicesByReservationID);
router.put("/updateService", updateService);
router.post("/insertServiceReservation", insertService);

export default router;