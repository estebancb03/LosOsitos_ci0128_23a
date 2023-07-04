import { Router } from "express";
import { getPerson, insertPerson, updatePersonData } from "../models/personModel.js";
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/person/:id", getPerson);

router.post("/person", insertPerson);

router.put("/updatePersonData", checkOperatorAuth, updatePersonData);

export default router;
