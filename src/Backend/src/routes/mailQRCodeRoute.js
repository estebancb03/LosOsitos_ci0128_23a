import { Router } from "express";
import { mailQRCodeSender } from "../helpers/mailQRCodeSender.js";

const router = Router();

router.post("/mail", mailQRCodeSender);

export default router;
