import { useState } from "react"
import Button from "../Buttons/Button";

const PaymentMethod = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    return <>
        <div className="grid grid-cols-3">
            <div className="h-20">
                <div className="h-10 mr-5 my-5">
                    <Button className="mx-5 mr-5" text="Credit Card" type="add" onclickFunction={() => setPaymentMethod("creditCard")} />
                </div>
            </div>
            <div className="h-20">
                <div className="h-10 ml-5 my-5">
                    <Button className="mx-5 mr-5" text="PayPal" type="add" onclickFunction={() => setPaymentMethod("Sinpe")} />
                </div>
            </div>
        </div>
    </>
}

export default PaymentMethod