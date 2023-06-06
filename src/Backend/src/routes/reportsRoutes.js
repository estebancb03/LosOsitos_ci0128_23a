import { Router } from "express";
import { getIncomeData, getVisitationData } from "../models/reportsModel.js";

const router = Router();

router.get('/income/:start_date/:end_date/:file_type', getIncomeData)
router.get('/visitation/:start_date/:end_date/:file_type', getVisitationData)

export default router;