import { useEffect, useState } from "react";
import Modal from "../Modal";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";
import PasswordButton from "../Buttons/PasswordButton";
import DropDownSelect from "../Buttons/DropDownSelect";
import AddPerson from "../ReservationList/Add/AddPerson";
import useUser from "../../hooks/useUser";

const CreateUser = (props) => {
  const {
    viewModal,
    setViewModal,
    user,
    setUser,
    exitMethod
  } = props;
  const { modifyUserData } = useUser();

  const changeUser = (type, value) => {
    const newUser = modifyUserData(type, value, user);
    setUser(newUser);
  };

  const saveUser = () => {

  };

  return (
    <>
      <Modal state={viewModal} setState={setViewModal} exitFunction={exitMethod} title="Create User">
        <AddPerson
          reservation={user}
          setReservation={setUser}
        />
        <div className="my-3 grid grid-cols-1">
          <DropDownSelect
            text="Type"
            options={["Admin", "Operator"]}
            disabled={false}
            typeChange="usertype"
            onChangeFunction={changeUser}
          />
        </div>
        <div className="my-3 grid grid-cols-1">
          <InputButton
            text="Username"
            type="username"
            placeholderText=""
            disabled={false}
            onChangeFunction={changeUser}
          />
        </div>
        <div className="my-3 grid grid-cols-1">
          <PasswordButton
            text="Password"
            type="userpassword"
            placeholderText=""
            disabled={false}
            onChangeFunction={changeUser}
          />
        </div>
        <div className="my-3">
          <Button
            text="Save user"
            onclickFunction={saveUser}
          />
        </div>
      </ Modal>
    </>
  );
};

export default CreateUser;
