import { Router } from "express";
import { getPerson, insertPerson, updatePersonData } from "../models/personModel.js";

const router = Router();

router.get("/person/:id", getPerson);

router.post("/person", insertPerson);

router.put("/updatePersonData", updatePersonData);

export default router;
