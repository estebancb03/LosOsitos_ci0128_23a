import { Router } from "express";
import { getCountry, postCountry } from "../models/countryModel.js";

const router = Router();

router.get("/country", getCountry);
router.post("/country", postCountry);

export default router;
