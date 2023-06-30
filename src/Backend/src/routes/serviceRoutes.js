import {Router} from "express";
import {getServicesOptions, getServicesWithQuantityAndPrices, updateServicesWithQuantityAndPrices, insertNewService, disableService} from "../models/serviceModel.js"

const router = Router()

router.get("/getServicesOptions", getServicesOptions);

router.get("/getServicesWithQuantityAndPrices", getServicesWithQuantityAndPrices);

router.put("/updateServicesWithQuantityAndPrices", updateServicesWithQuantityAndPrices)

router.post("/insertNewService", insertNewService);

router.put("/disableService", disableService);

export default router;
