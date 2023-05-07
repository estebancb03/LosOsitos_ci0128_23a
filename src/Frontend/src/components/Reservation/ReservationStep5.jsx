import { useState } from "react"
import Button from "../Buttons/Button";
import Title from "../Title";

const ReservationStep5 = ({
    windows,
    setWindows
}) => {
    const [paymentMethod, setPaymentMethod] = useState("");

    const updateReservationData = () => {
        const newWindows = {...windows};
        if (paymentMethod === "Sinpe" || paymentMethod === "Cash") {
            newWindows.Step5 = false;
            newWindows.Step6 = true;
        }
        setWindows(newWindows);
    };

    return <>
    {windows.Step5 && (
        <div>
            <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">Choose your payment method</h2>
        <div className="grid grid-cols-3">
            <div className="h-20">
                <div className="h-10">
                    <Button  text="Credit Card"  onclickFunction={(e) => {setPaymentMethod("creditCard");
                     updateReservationData();}} />
                </div>
            </div>
            <div className="h-20">
                <div className="h-10 mx-5">
                    <Button  text="Sinpe"  onclickFunction={(e) => {setPaymentMethod("Sinpe");
                        updateReservationData();}} />
                </div>
            </div>
            <div className="h-20">
                <div className="h-10">
                    <Button  text="Cash"  onclickFunction={(e) => {setPaymentMethod("Cash");
                        updateReservationData();}} /> 
                </div>
            </div>
        </div>
        </div>
    )}
    </>
}

export default ReservationStep5;