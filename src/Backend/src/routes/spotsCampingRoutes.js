import {Router} from "express"
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js"
import {getAllSpots, getSpotsByReservationID, insertSpotCamping, updateSpot} from "../models/spotsCampingModel.js"

const router = Router();

router.get("/getAllSpots", checkOperatorAuth, getAllSpots);

router.get("/getSpotsByReservationID/:ID/:Reservation_Date", checkOperatorAuth, getSpotsByReservationID);

router.post("/spots", checkOperatorAuth, insertSpotCamping);

router.put("/updateSpot", checkOperatorAuth, updateSpot);

export default router;