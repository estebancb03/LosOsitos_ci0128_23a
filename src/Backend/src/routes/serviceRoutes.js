import {Router} from "express";
import {getServicesOptions, getServicesWithQuantityAndPrices, updateServicesWithQuantityAndPrices, insertNewService} from "../models/serviceModel.js"

const router = Router()

router.get("/getServicesOptions", getServicesOptions);

router.get("/getServicesWithQuantityAndPrices", getServicesWithQuantityAndPrices);

router.put("/updateServicesWithQuantityAndPrices", updateServicesWithQuantityAndPrices)

router.post("/insertNewService", insertNewService);

export default router;
