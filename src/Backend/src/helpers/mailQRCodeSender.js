import nodemailer from 'nodemailer'
import QRCode from 'qrcode'
import {transporter} from '../config/mailer.js'

export const mailQRCodeSender = async (req, res) => {
    const value = req.body
    console.log(value)
    let img = await QRCode.toDataURL(value.data)  // aquí va el id de la reserva (id cliente y fecha)

    const message = {
        from: '"Los Ositos 🐻" <ositosdelacueva@gmail.com>', // sender address
        to: "dylantr2001@gmail.com, isra2002lova@gmail.com", // list of receivers
        subject: "QR Test", // Subject line, 
        attachDataUrls: true,
        html: `<h1>Thanks for your purchase!</h1></br><img src="${img}">`, // html body
    };
    
    try {
        let info = await transporter.sendMail(message)
        res.status(200).json(info)
    } catch (exception) {
        res.status(500)
    }
}

export default mailQRCodeSender