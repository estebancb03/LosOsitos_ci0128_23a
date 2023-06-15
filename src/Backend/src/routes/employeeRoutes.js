import { Router } from "express";
import {
  checkUsername,
  getEmployees,
  insertEmployee
} from "../models/employeeModel.js";

const router = Router();

router.get("/employee/:Username", checkUsername);
router.get("/employee", getEmployees);
router.post("/employee", insertEmployee);

export default router;
