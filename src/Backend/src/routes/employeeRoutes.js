import { Router } from "express";
import { checkOperatorAuth, checkAdminAuth } from "../middlewares/authMiddleware.js";
import {
  checkUsername,
  getEmployeeByUsername,
  getEmployees,
  insertEmployee,
  deleteEmployee,
  authEmployee
} from "../models/employeeModel.js";

const router = Router();

router.get("/employee/:Username", checkUsername);
router.get("/employee/getEmployeeByUsername/:Username", getEmployeeByUsername);
router.get("/employee/:Username/:Password", authEmployee);
router.get("/employee", checkAdminAuth, getEmployees);
router.post("/employee", checkAdminAuth, insertEmployee);
router.delete("/employee/:Username", checkAdminAuth, deleteEmployee);

export default router;
