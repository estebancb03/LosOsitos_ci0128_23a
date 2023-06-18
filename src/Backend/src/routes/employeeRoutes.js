import { Router } from "express";
import {
  checkUsername,
  getEmployees,
  insertEmployee,
  deleteEmployee,
  authEmployee
} from "../models/employeeModel.js";

const router = Router();

router.get("/employee/:Username", checkUsername);
router.get("/employee/:Username/:Password", authEmployee);
router.get("/employee", getEmployees);
router.post("/employee", insertEmployee);
router.delete("/employee/:Username", deleteEmployee);

export default router;
