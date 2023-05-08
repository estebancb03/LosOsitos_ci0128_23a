import { useState, useEffect} from "react";
import Title from "../Title";
import Button from "../Button";
import AxiosClient from "../../config/AxiosClient";
import { QRCode } from 'antd';

// Method to send data to be emailed
const sendQRData = async (value) => {
try {
    console.log("isra es furro")
    const data = value
    const url = "/mail";
    await AxiosClient.post(url, {
    data
    });
} catch (exception) {
    console.log(exception);
}
};
          

const ReservationStep7 = () => {
    const [value, setValue] = useState({
        data: 'test, 123 abc',
        mail: 'dylantr2001@gmail.com'
    })

    return (
        <>
        <Title
        name={'Thanks for your Purchase'}/>
        <div className="mx-[37.5%]">
            <QRCode
                errorLevel="H"
                value={value}
                size={300}
                
            />
        </div>
        </>
    )
    };

export default ReservationStep7;



  
