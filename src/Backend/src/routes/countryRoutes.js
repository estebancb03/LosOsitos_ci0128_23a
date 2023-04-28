import {Router} from "express"
import {getCountry} from "../controllers/countryController.js"

const router = Router();

router.get("/country", getCountry);

export default router