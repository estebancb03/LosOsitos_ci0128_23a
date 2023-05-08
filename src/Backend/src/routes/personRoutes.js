import { Router } from "express";
import { getPerson, insertPerson, insertClient } from "../models/personModel.js";

const router = Router();

router.get("/person/:id", getPerson);
router.post("/person", insertPerson);
router.post("/client", insertClient);

export default router;
