import { useEffect, useState } from "react";
import Modal from "../Modal";
import Button from "../Buttons/Button";
import AddPerson from "../ReservationList/Add/AddPerson";

const CreateUser = (props) => {
  const {
    viewModal,
    setViewModal,
    user,
    setUser,
    exitMethod
  } = props;
  
  return (
    <>
      <Modal state={viewModal} setState={setViewModal} exitFunction={exitMethod} title="Create User">
      </ Modal>
    </>
  );
};

export default CreateUser;
