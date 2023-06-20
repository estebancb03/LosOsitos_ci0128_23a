import { Router } from "express";
import { getIncomeData, getVisitationData } from "../models/reportsModel.js";
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js";

const router = Router();

router.get('/income/:start_date/:end_date', checkAdminAuth, getIncomeData)
router.get('/visitation/:start_date/:end_date', checkAdminAuth, getVisitationData)

export default router;