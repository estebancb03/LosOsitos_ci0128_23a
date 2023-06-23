import {Router} from "express";
import {getServicesOptions, getServicesWithQuantityAndPrices} from "../models/serviceModel.js"

const router = Router()

router.get("/getServicesOptions", getServicesOptions);

router.get("/getServicesWithQuantityAndPrices", getServicesWithQuantityAndPrices);

export default router;
