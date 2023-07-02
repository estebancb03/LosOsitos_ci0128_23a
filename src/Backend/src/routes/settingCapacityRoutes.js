import { Router } from "express";
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js";
import { getActualCapacities, updateCapacity, getExchangeRate, getTermsAndConditionLink, updateTermsAndConditionsLink } from "../models/settingCapacityModel.js";

const router = Router();

router.get("/getActualCapacities", getActualCapacities)

router.put("/updateCapacity", checkAdminAuth, updateCapacity);

router.get("/getExchangeRate", getExchangeRate);

router.get("/getTermsAndConditionLink", getTermsAndConditionLink);

router.put("/updateTermsAndConditionsLink", updateTermsAndConditionsLink);

export default router;