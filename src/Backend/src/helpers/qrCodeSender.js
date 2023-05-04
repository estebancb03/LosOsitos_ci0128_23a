import nodemailer from 'nodemailer'
import QRCode from 'qrcode'
import {transporter} from '../config/mailer.js'

export const mailTest = async (req, res) => {
    let img = await QRCode.toDataURL("Hello world!")  // aquí va el id de la reserva (id cliente y fecha)

    const message = {
        from: '"Los Ositos 🐻" <ositosdelacueva@gmail.com>', // sender address
        to: "estebanr.castaneda03@gmail.com, isra2002lova@gmail.com", // list of receivers
        subject: "QR Test", // Subject line, 
        attachDataUrls: true,
        html: `<h1>Buenas!</h1></br><img src="${img}">`, // html body
    };
    
    try {
        let info = await transporter.sendMail(message)
        res.status(200).json(info)
    } catch (exception) {
        res.status(500)
    }
}

export default mailTest