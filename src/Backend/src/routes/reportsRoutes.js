import { Router } from "express";

const router = Router();

router.get('income/:start_date/:end_date')
router.get('visitation/:start_date/:end_date')

export default router;