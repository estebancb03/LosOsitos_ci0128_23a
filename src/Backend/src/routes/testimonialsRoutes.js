import { Router } from "express";
import { getAllReviews, updateReviewState, getRandomReviews, getCheckReview, updateReview, insertReview } from "../models/TestimonialsModel.js";

const router = Router();

router.get("/getAllReviews", getAllReviews);
router.put("/updateReviewState", updateReviewState);
router.get("/getRandomReviews", getRandomReviews);
router.get("/getCheckReview/:ID", getCheckReview);
router.put("/updateReview", updateReview);
router.post("/insertReview", insertReview);

export default router;