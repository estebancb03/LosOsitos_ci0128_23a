import { Router } from "express";
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js";
import { getAllReviews, updateReviewState, getRandomReviews, getCheckReview, updateReview, insertReview } from "../models/TestimonialsModel.js";

const router = Router();

router.get("/getAllReviews", checkAdminAuth, getAllReviews);
router.put("/updateReviewState", checkAdminAuth, updateReviewState);
router.get("/getRandomReviews", getRandomReviews);
router.get("/getCheckReview/:ID", getCheckReview);
router.put("/updateReview", updateReview);
router.post("/insertReview", insertReview);

export default router;