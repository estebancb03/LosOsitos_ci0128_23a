import InputButton from "../../Buttons/InputButton";
import AddVehicle from "../Add/AddVehicle";

const ShowImage = (props) => {
  const {
    disabledElements,
    reservation,
    setReservation
  } = props;

  if (reservation.Payment_Proof)
  return (
    <>
        {reservation.Payment_Proof != "null" &&
        <div className="mb-3 mt-6">
            <label className="block text-xl font-semibold leading-6 text-gray-900">Payment Proof</label>
            <div className="grid grid-cols-1">
                <div className="my-1 mr-3">
                    <img src={reservation.Payment_Proof} className="h-auto max-w-full rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
                    />
                </div>
            </div>
        </div>
        }
       
    </>
  );
  else {
    return <></>
  }
};

export default ShowImage;
