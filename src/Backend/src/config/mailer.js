import dotenv from "dotenv";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "ositosdelacueva@gmail.com", // generated ethereal user
    pass: "qsyytpmwqikkdgpi", // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log("[] Mailer ready...");
});
