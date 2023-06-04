import {useEffect, useState} from "react";
import Modal from "../Modal";
import Button from "../Buttons/Button";
import useUpdateReservation from "../../hooks/useUpdateReservation";
import useValidations from "../../hooks/useValidations";
import useCalculateFees from "../../hooks/useCalculateFees";
import ShowPerson from "./Show/ShowPerson";
import ShowMainData from "./Show/ShowMainData";
import ShowSpots from "./Show/ShowSpots";
import ShowVehicles from "./Show/ShowVehicles";
import ShowServices from "./Show/ShowServices";
import ShowTickets from "./Show/ShowTickets";

const ShowReservation = (props) => {
  // Props
  const {
    currentRecord,
    setCurrentRecord,
    viewModal,
    setViewModal,
    exitMethod
  } = props;
  // State that controls the modify button in the popup
  const [modifyButton, setModifyButton] = useState("Modify");
  // State that controls the elements availability in the popup
  const [disabledElements, setDisabledElements] = useState(true);
  // Hook that updates the reservation
  const {updateReservation} = useUpdateReservation(currentRecord);
  // Hook that validates changes
  const {validateUpdateReservation} = useValidations(currentRecord);
  // Hook that calculates fees
  const {calculateSpotsFee} = useCalculateFees(currentRecord);

  // Method that handles what happen when the modify button is clicked
  const modifyHandleClick = () => {
    setDisabledElements(!disabledElements);
    modifyButton === "Modify"
      ? setModifyButton("Save changes")
      : setModifyButton("Modify");
  };

  // Method that puts the element in its initial state
  const restartModal = () => {
    setViewModal(false);
    setDisabledElements(true);
    setModifyButton("Modify");
  };

  // Method that change the reservation data
  const changeReservationData = () => {
    modifyHandleClick();
    if (modifyButton === "Save changes") {
      if (validateUpdateReservation()) {
        updateReservation();
      } else {
        alert("Incorrect data, check the information entered");
      }
    }
  };

  return (
    <Modal state={viewModal} setState={restartModal} exitFunction={exitMethod} title="Reservation Data">
      <div className="my-3">
        {
          <Button
            text={modifyButton}
            onclickFunction={changeReservationData}
          />
        }
      </div>
      <ShowPerson
        disabledElements={disabledElements}
        reservation={currentRecord}
        setReservation={setCurrentRecord}
      />
      <ShowMainData
        disabledElements={disabledElements}
        reservation={currentRecord}
        setReservation={setCurrentRecord}
      />
      <ShowTickets
        disabledElements={disabledElements}
        reservation={currentRecord}
        setReservation={setCurrentRecord}
      />
      <ShowSpots
        disabledElements={disabledElements}
        reservation={currentRecord}
        setReservation={setCurrentRecord}
      />
      <ShowServices
        disabledElements={disabledElements}
        reservation={currentRecord}
        setReservation={setCurrentRecord}
      />
      <ShowVehicles
        disabledElements={disabledElements}
        reservation={currentRecord}
        setReservation={setCurrentRecord}
      />
      {calculateSpotsFee()}
    </Modal>
  );
};

export default ShowReservation;
