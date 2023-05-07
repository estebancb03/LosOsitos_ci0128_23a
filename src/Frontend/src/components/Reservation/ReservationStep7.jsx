import { useState, useEffect} from "react";
import Title from "../Title";
import AxiosClient from "../../config/AxiosClient";
import { QRCode } from 'antd';

// Method that updates the data of a camping dates
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
    const [value, setValue] = useState('Test, 123 abc')
    /* {useEffect(() => {
        sendQRData(value)
    }, [])} */

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



  
