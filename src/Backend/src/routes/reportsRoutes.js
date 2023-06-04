import { Router } from "express";
import { getIncomeData, getVisitationData } from "../models/reportsModel.js";

const router = Router();

router.get('/income/:start_date/:end_date', getIncomeData)
router.get('/visitation/:start_date/:end_date', getVisitationData)

export default router;