import { Router } from "express";
import { getAvailableSpotsByDates } from "../models/spotsModels.js";

const router = Router();

router.get("/getAvailableSpotsByDates/:Reservation_Start_Date/:Reservation_End_Date", getAvailableSpotsByDates)

export default router