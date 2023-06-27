import {Router} from "express";
import {getServicesOptions, getServicesWithQuantityAndPrices, updateServicesWithQuantityAndPrices} from "../models/serviceModel.js"

const router = Router()

router.get("/getServicesOptions", getServicesOptions);

router.get("/getServicesWithQuantityAndPrices", getServicesWithQuantityAndPrices);

router.put("/updateServicesWithQuantityAndPrices", updateServicesWithQuantityAndPrices)

export default router;
