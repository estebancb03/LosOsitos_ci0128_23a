import { Router } from "express";
import { getAvailableSpotsByDates, insertSpotCamping } from "../models/spotsModels.js";

const router = Router();

router.get("/getAvailableSpotsByDates/:Reservation_Start_Date/:Reservation_End_Date", getAvailableSpotsByDates);
router.post("/spots", insertSpotCamping);

export default router;