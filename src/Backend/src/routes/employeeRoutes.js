import { Router } from "express";
import { checkUsername, insertEmployee } from "../models/employeeModel.js";

const router = Router();

router.get("/employee/:Username", checkUsername);
router.post("/employee", insertEmployee);

export default router;
