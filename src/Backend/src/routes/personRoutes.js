import { Router } from "express";
import { getPerson } from "../models/personModel.js";

const router = Router();

router.get("/person/:id", getPerson);

export default router;
