import {Router} from "express"
import {getAllSpots, getSpotsByReservationID, insertSpotCamping, updateSpot} from "../models/spotsCampingModel.js"

const router = Router();

router.get("/getAllSpots", getAllSpots);

router.get("/getSpotsByReservationID/:ID/:Reservation_Date", getSpotsByReservationID);

router.post("/spots", insertSpotCamping);

router.put("/updateSpot", updateSpot);

export default router;