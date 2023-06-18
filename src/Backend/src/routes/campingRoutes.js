import { Router } from "express";
import { insertCamping, updateStartEndDates } from "../models/campingModel.js";
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/camping', insertCamping);

router.put("/updateStartEndDates", checkOperatorAuth, updateStartEndDates);

export default router;