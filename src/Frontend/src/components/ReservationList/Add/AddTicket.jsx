import { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";

const AddTicket = (props) => {
  // Props
  const {
    disabledElements,
    reservation,
    setReservation
  } = props;

  return (
    <>
    <div className="mt-4 mb-2">
      <Button
        text="Add ticket"
        type="add"
        disabled={disabledElements}
        onclickFunction={() => {}}
      />
    </div>
    </>
  );
};

export default AddTicket;