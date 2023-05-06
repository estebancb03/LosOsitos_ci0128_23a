import { useState } from "react"
import Button from "../Buttons/Button";

const ReservationStep = () => {
    const [reservationType, setReservationType] = useState("");
    return <>
        <div className="grid grid-cols-2">
            <div className="h-20">
                <div className="h-10 mr-5 my-5">
                    <Button className="mx-5 mr-5" text="Camping" type="add" onclickFunction={() => setReservationType("camping")} />
                </div>
            </div>
            <div className="h-20">
                <div className="h-10 ml-5 my-5">
                    <Button className="mx-5 mr-5" text="Picnic" type="add" onclickFunction={() => setReservationType("picnic")} />
                </div>
            </div>
        </div>
        <div>
            {reservationType === "camping" && <p className="h-10 bg-slate-500">Hello Camping!</p>}
            {reservationType === "picnic" && <p className="h-10 bg-slate-500">Hello Picnic!</p>}
        </div>
    </>
}

export default ReservationStep1