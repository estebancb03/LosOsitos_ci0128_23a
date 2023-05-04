import nodemailer from "nodemailer"
import {transporter} from '../config/mailer.js'
// import QRCode from "qrcode"

const reservationData = "11802 2023-02-02"

// let img = await QRCode.toDataURL("Hello world!")


export const mailTest = async (req, res) => {
  // send mail with defined transport object
    const message = {
        from: '"Los Ositos 🐻" <ositosdelacueva@gmail.com>', // sender address
        to: "daniel.lizanomorales@ucr.ac.cr, dylan.tenorio@ucr.ac.cr, israel.lopez@ucr.ac.cr, esteban.castaneda@ucr.ac.cr, carlos.quesadaestrada@ucr.ac.cr", // list of receivers
        subject: "Asunto sumamente importante", // Subject line
        html: "<b>A</b>", // html body
    };
    
    try {
        let info = await transporter.sendMail(message)
        res.status(200).json(info)
    } catch (exception) {
        res.status(500)
    }
}

export default mailTest