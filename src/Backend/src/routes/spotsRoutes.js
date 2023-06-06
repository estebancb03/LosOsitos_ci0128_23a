import { Router } from "express";
import { getAvailableSpotsByDates, getAllSpots } from "../models/spotsModels.js";

const router = Router();

router.get("/spots/getAllSpots", getAllSpots); 
router.get("/getAvailableSpotsByDates/:Reservation_Start_Date/:Reservation_End_Date", getAvailableSpotsByDates);

export default router;