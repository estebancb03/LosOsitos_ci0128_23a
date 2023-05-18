import {Router} from "express";
import {getServicesOptions} from "../models/serviceModel.js"

const router = Router()

router.get("/getServicesOptions", getServicesOptions);

export default router;
