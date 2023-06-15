import { Router } from "express";
import { checkUsername } from "../models/employeeModel.js";

const router = Router();

router.get("/employee/:Username", checkUsername);

export default router;
