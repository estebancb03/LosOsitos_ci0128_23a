import { Router } from "express";
import { getCountry } from "../models/countryModel.js";

const router = Router();

router.get("/", getCountry);

export default router;
