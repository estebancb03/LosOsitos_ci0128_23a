import { useState } from "react"
import Button from "../Buttons/Button";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import Title from "../Title";




function SearchBar() {
    return (
      <div>
        <input type="text" placeholder="Search" />
        <FaSearch />
      </div>
    );
  }
const PaymentMethod = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    return <>
        <Title name="Payment Method" />
        <div className="grid grid-cols-3">
            <div className="h-20">
                <div className="h-10">
                    <Button  text="Credit Card"  onclickFunction={() => setPaymentMethod("creditCard")} />
                </div>
            </div>
            <div className="h-20">
                <div className="h-10 mx-5">
                    <Button text="Sinpe"  onclickFunction={() => setPaymentMethod("Sinpe")} />
                </div>
            </div>
            <div className="h-20">
                <div className="h-10">
                    <Button  text="Cash"  onclickFunction={() => setPaymentMethod("Cash")} /> 
                </div>
            </div>
        </div>
    </>
}

export default PaymentMethod