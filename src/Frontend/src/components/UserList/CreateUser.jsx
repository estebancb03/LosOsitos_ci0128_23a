import Modal from "../Modal";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";
import PasswordButton from "../Buttons/PasswordButton";
import DropDownSelect from "../Buttons/DropDownSelect";
import AddPerson from "../ReservationList/Add/AddPerson";
import useUser from "../../hooks/useUser";
import useValidations from "../../hooks/useValidations";

const CreateUser = (props) => {
  const {
    viewModal,
    setViewModal,
    user,
    setUser,
    exitMethod
  } = props;
  const { modifyUserData, insertPerson, insertUser } = useUser();
  const { validatePersonalData, validateUser } = useValidations(user);

  const changeUser = (type, value) => {
    const newUser = modifyUserData(type, value, user);
    setUser(newUser);
  };

  const saveUser = async () => {
    const personDataValidation = await validatePersonalData();
    const userValidation = await validateUser();
    if (personDataValidation && userValidation) {
      await insertPerson(user);
      await insertUser(user);
      alert("User created successfully");
    } else {
      if (personDataValidation === false) {
        alert("Incorrect data, check the information entered");
      } else {
        alert("Incorrect username or password, check the information entered");
      }
    }
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
            datacy="addusertype-select"
            text="Type"
            options={["Admin", "Operator"]}
            disabled={false}
            typeChange="usertype"
            onChangeFunction={changeUser}
          />
        </div>
        <div className="my-3 grid grid-cols-1">
          <InputButton
            datacy="addusername-input"
            text="Username"
            type="username"
            placeholderText=""
            disabled={false}
            onChangeFunction={changeUser}
          />
        </div>
        <div className="my-3 grid grid-cols-1">
          <PasswordButton
            datacy="adduserpassword-input"
            text="Password"
            type="userpassword"
            placeholderText=""
            disabled={false}
            onChangeFunction={changeUser}
            onPressEnterFunction={saveUser}
          />
        </div>
        <div className="my-3">
          <Button
            datacy="saveuser-button"
            text="Save user"
            onclickFunction={saveUser}
          />
        </div>
      </ Modal>
    </>
  );
};

export default CreateUser;
