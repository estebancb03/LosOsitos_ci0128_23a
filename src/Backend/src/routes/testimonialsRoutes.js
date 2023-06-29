import { Router } from "express";
import { getAllReviews, updateReviewState } from "../models/TestimonialsModel.js";

const router = Router();

router.get("/getAllReviews", getAllReviews);
router.put("/updateReviewState", updateReviewState);

export default router;