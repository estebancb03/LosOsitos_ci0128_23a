import { Router } from "express";
import { getPerson, insertPerson } from "../models/personModel.js";

const router = Router();

router.get("/person/:id", getPerson);
router.post("/person", insertPerson);

export default router;
