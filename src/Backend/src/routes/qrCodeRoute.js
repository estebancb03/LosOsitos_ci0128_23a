import { Router } from "express";
import { mailTest } from "../helpers/qrCodeSender.js";

const router = Router();

router.post("/mail", mailTest);

export default router;
