import {Router} from "express"
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js"
import {
  insertService,
  getAllServices,
  getServicesByReservationID,
  updateService
} from "../models/serviceReservationModel.js"

const router = Router();

router.get("/getAllServices", getAllServices);
router.get("/getServicesByReservationID/:ID/:Reservation_Date", checkOperatorAuth, getServicesByReservationID);
router.put("/updateService", checkOperatorAuth, updateService);
router.post("/insertServiceReservation", insertService);

export default router;