import nodemailer from "nodemailer";
import QRCode from "qrcode";
import { transporter } from "../config/mailer.js";
import { formatDateDTDDMMYYYY } from "./DateFormater.js";

export const mailQRCodeSender = async (req, res) => {
  const { data } = req.body;
  const {
    Name,
    LastName1,
    LastName2,
    Reservation_Date,
    Start_Date,
    End_Date,
    Picnic_Date,
    Reservation_Type
  } = data.text;
  let img = await QRCode.toDataURL(data.data); // aquí va el id de la reserva (id cliente y fecha)

  const message = {
    from: '"Refugio de Vida Silvestre Bahía Junquillal, Cuajiniquil, La Cruz. Guanacaste" <apatubaju@gmail.com>', // sender address
    to: data.mail, // list of receivers
    subject: Reservation_Type === 0 ? `Picnic reservation` : `Camping reservation`, // Subject line,
    attachDataUrls: true,
    html: Reservation_Type === 0 ? `
      <h1>Thanks for your purchase, enjoy your stay!</h1>
      </br><img src="${img}">
      <p> Customer: ${Name} ${LastName1} ${LastName2}</p>
      <p> Reservation date: ${formatDateDTDDMMYYYY(Reservation_Date)}</p>
      <p> Arrival date: ${formatDateDTDDMMYYYY(Picnic_Date)}</p>
      <p> Bill: ₡${data.crcBill} | $${data.usdBill}</p>
     ` : `
      <h1>Thanks for your purchase, enjoy your stay!</h1>
      </br><img src="${img}"> 
      <p> Customer: ${Name} ${LastName1} ${LastName2}</p>
      <p> Reservation date: ${formatDateDTDDMMYYYY(Reservation_Date)}</p>
      <p> Arrival date: ${formatDateDTDDMMYYYY(Start_Date)}</p>
      <p> Departure date: ${formatDateDTDDMMYYYY(End_Date)}</p>
      <p> Bill: ₡${data.crcBill} | $${data.usdBill}</p>
     `, // html body
  };

  try {
    let info = await transporter.sendMail(message);
    res.status(200).json(info);
  } catch (exception) {
    res.status(500);
  }
};

export default mailQRCodeSender;
