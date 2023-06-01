import { Router } from "express";
import { insertCamping, updateStartEndDates } from "../models/campingModel.js";

const router = Router();

router.post('/camping', insertCamping);

router.put("/updateStartEndDates", updateStartEndDates);

export default router;