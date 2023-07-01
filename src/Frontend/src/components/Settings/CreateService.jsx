import { useState } from "react";
import Modal from "../Modal";
import InputButton from "../Buttons/InputButton";
import Button from "../Buttons/Button";
import useServices from "../../hooks/useServices";

const CreateService = (props) => {
  const { viewModal, setViewModal, exitFunction } = props;
  const { insertNewService } = useServices();
  const [newServiceInfo, setNewServiceInfo] = useState({
    Name: "",
    Quantity: "",
    USD: "",
    CRC: "",
  });

  const checkInformation = () => {
    if (!checkForEmptyValues()) {
      if (checkNameEntered() && checkInventoryValue() && checkPricesValues()) {
        // Send data to database
        insertNewService(
          newServiceInfo.Name,
          newServiceInfo.Quantity,
          newServiceInfo.USD,
          newServiceInfo.CRC
        );
        alert("The service has been added");
      }
    }
  };

  const checkForEmptyValues = () => {
    let hasEmptyValues = false;
    if (
      newServiceInfo.Name === "" ||
      newServiceInfo.Quantity === "" ||
      newServiceInfo.USD === "" ||
      newServiceInfo.CRC === ""
    ) {
      alert("Please fill in all the fields.");
      hasEmptyValues = true;
    }
    return hasEmptyValues;
  };

  const capitalizeString = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const checkNameEntered = () => {
    const regex = /^[A-Za-z \(\)\[\]]+$/;
    let successfulConversion = true;
    if (regex.test(newServiceInfo.Name)) {
      setNewServiceInfo((prevServiceInfo) => ({
        ...prevServiceInfo,
        Name: capitalizeString(newServiceInfo.Name),
      }));
    } else {
      alert(
        "You entered a name with invalid characters. Please use only characters from A-Z and a-z\nChanges will not be applied"
      );
      successfulConversion = false;
    }
    return successfulConversion;
  };

  const checkInventoryValue = () => {
    const regex = /^(0|[1-9]\d*)$/;
    let successfulConversion = true;
    if (regex.test(newServiceInfo.Quantity)) {
      setNewServiceInfo((prevServiceInfo) => ({
        ...prevServiceInfo,
        Quantity: parseInt(newServiceInfo.Quantity),
      }));
    } else {
      alert(
        "You entered an invalid number for the inventory value. Please enter only positive numbers\nChanges will not be applied"
      );
      successfulConversion = false;
    }
    return successfulConversion;
  };

  const checkPricesValues = () => {
    let successfulConversion = true;
    const regex = /^(?!.*[,])\d+(\.\d+)?$/;
    if (regex.test(newServiceInfo.USD) && regex.test(newServiceInfo.CRC)) {
      setNewServiceInfo((prevServiceInfo) => ({
        ...prevServiceInfo,
        USD: parseFloat(newServiceInfo.USD),
        CRC: parseFloat(newServiceInfo.CRC),
      }));
    } else {
      alert(
        "You entered an invalid number for prices. Please enter only positive numbers\nChanges will not be applied"
      );
      successfulConversion = false;
    }
    return successfulConversion;
  };

  const resetNewServiceInfo = () => {
    setNewServiceInfo({
      Name: "",
      Quantity: "",
      USD: "",
      CRC: "",
    });
    setViewModal(false);
  };

  const modifyName = (type, value) => {
    setNewServiceInfo((prevServiceInfo) => ({
      ...prevServiceInfo,
      Name: value,
    }));
  };

  const modifyInventoryValue = (type, value) => {
    setNewServiceInfo((prevServiceInfo) => ({
      ...prevServiceInfo,
      Quantity: value,
    }));
  };

  const modifyPriceValue = (type, value) => {
    type === "usdPrice"
      ? setNewServiceInfo((prevServiceInfo) => ({
          ...prevServiceInfo,
          USD: value,
        }))
      : setNewServiceInfo((prevServiceInfo) => ({
          ...prevServiceInfo,
          CRC: value,
        }));
  };
  return (
    <>
      <Modal
        state={viewModal}
        setState={setViewModal}
        exitFunction={() => {
          exitFunction();
          resetNewServiceInfo();
        }}
        title="Create Service"
      >
        <div className="mt-6 grid grid-cols-1">
          <InputButton
            text="Service Name"
            type="serviceName"
            placeholderText={newServiceInfo.Name}
            disabled={false}
            onChangeFunction={modifyName}
          />
          <div className="mt-6 grid grid-cols-1">
            <InputButton
              text="Inventory"
              type="inventory"
              placeholderText={newServiceInfo.Quantity}
              disabled={false}
              onChangeFunction={modifyInventoryValue}
            />
          </div>
          <div className="mt-6 grid grid-cols-1" v>
            <InputButton
              text="USD Price"
              type="usdPrice"
              placeholderText={newServiceInfo.USD}
              disabled={false}
              onChangeFunction={modifyPriceValue}
            />
          </div>
          <div className="mt-6 grid grid-cols-1">
            <InputButton
              text="CRC Price"
              type="crcPrice"
              placeholderText={newServiceInfo.CRC}
              disabled={false}
              onChangeFunction={modifyPriceValue}
            />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1">
          <Button text="Save" onclickFunction={() => checkInformation()} />
        </div>
      </Modal>
    </>
  );
};

export default CreateService;
