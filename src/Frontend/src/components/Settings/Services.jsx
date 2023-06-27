import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import useServices from "../../hooks/useServices";
import { useState, useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import InputButton from "../Buttons/InputButton";
import Button from "../Buttons/Button";

const Services = () => {
  const { servicesWithQuantityAndPrices, updateServicesWithQuantityAndPrices } =
    useServices();
  const columnNames = ["Name", "Inventory", "USD", "CRC", "Modify", "Delete"];

  const [servicesData, setServicesData] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [buttonIconOfModify, setButtonIconOfModify] = useState([]);
  const [originalNames, setOriginalNames] = useState([]);

  const readyToLoad = () => {
    return servicesWithQuantityAndPrices.length > 0;
  };

  const checkQuantity = (quantity) => {
    let validQuantity = 0;
    quantity === 0 ? (validQuantity = "NA") : (validQuantity = quantity);
    return validQuantity;
  };

  const modifyName = (index, value) => {
    setServicesData((prevServicesData) => {
      const updatedData = [...prevServicesData];
      updatedData[index].Name = value;
      return updatedData;
    });
  };

  const modifyInventoryValue = (index, value) => {
    setServicesData((prevServicesData) => {
      const updatedData = [...prevServicesData];
      updatedData[index].Quantity = value;
      return updatedData;
    });
  };

  const modifyPriceValue = (columnToModify, index, value) => {
    if (columnToModify === "USD") {
      setServicesData((prevServicesData) => {
        const updatedData = [...prevServicesData];
        updatedData[index].USD = value;
        return updatedData;
      });
    } else {
      setServicesData((prevServicesData) => {
        const updatedData = [...prevServicesData];
        updatedData[index].CRC = value;
        return updatedData;
      });
    }
  };

  const modifyValueInTable = (type, value) => {
    const columnToModify = type[0];
    const indexToModify = type[1];
    columnToModify === "Name"
      ? modifyName(indexToModify, value)
      : columnToModify === "Quantity"
      ? modifyInventoryValue(indexToModify, value)
      : modifyPriceValue(columnToModify, indexToModify, value);
  };

  const validateUserInput = (index) => {
    return (
      checkNameEntered(index) &&
      checkInventoryValue(index) &&
      checkPricesValues(index)
    );
  };

  const enableInput = (index) => {
    setDisabledButtons((prevButtons) =>
      prevButtons.map((button, i) => (i === index ? !button : button))
    );
  };

  const capitalizeString = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const checkNameEntered = (index) => {
    const regex = /^[A-Za-z]+$/;
    let successfulConversion = true;
    if (regex.test(servicesData[index].Name)) {
      setServicesData((prevServicesData) => {
        const updatedData = [...prevServicesData];
        updatedData[index].Name = capitalizeString(servicesData[index].Name);
        return updatedData;
      });
    } else {
      alert(
        "You entered a name with invalid characters. Please use only characters from A-Z and a-z\nChanges will not be applied"
      );
      successfulConversion = false;
    }
    return successfulConversion;
  };

  const checkInventoryValue = (index) => {
    const regex = /^(0|[1-9]\d*)$/;
    let successfulConversion = true;
    if (
      regex.test(servicesData[index].Quantity) ||
      servicesData[index].Quantity === "NA"
    ) {
      setServicesData((prevServicesData) => {
        const updatedData = [...prevServicesData];
        updatedData[index].Quantity = parseInt(servicesData[index].Quantity);
        return updatedData;
      });
    } else {
      alert(
        "You entered an invalid number for the inventory value. Please enter only positive numbers\nChanges will not be applied"
      );
      successfulConversion = false;
    }
    return successfulConversion;
  };

  const checkPricesValues = (index) => {
    let successfulConversion = true;
    const regex = /^(?!.*[,])\d+(\.\d+)?$/;
    if (
      regex.test(servicesData[index].USD) &&
      regex.test(servicesData[index].CRC)
    ) {
      setServicesData((prevServicesData) => {
        const updatedData = [...prevServicesData];
        updatedData[index].USD = parseFloat(servicesData[index].USD);
        updatedData[index].CRC = parseFloat(servicesData[index].CRC);
        return updatedData;
      });
    } else {
      alert(
        "You entered an invalid number for prices. Please enter only positive numbers\nChanges will not be applied"
      );
      successfulConversion = false;
    }
    return successfulConversion;
  };

  const changeButtonIcon = (buttonToModify, index) => {
    let managedToChangeIcon = true;
    if (buttonToModify === "Modify") {
      if (buttonIconOfModify[index].type === BsPencil) {
        const updatedIcons = [...buttonIconOfModify];
        updatedIcons[index] = <BsCheck2 />;
        setButtonIconOfModify(updatedIcons);
      } else {
        if (validateUserInput(index)) {
          const updatedIcons = [...buttonIconOfModify];
          updatedIcons[index] = <BsPencil />;
          setButtonIconOfModify(updatedIcons);
          // Send data to database
          updateServicesWithQuantityAndPrices(
            originalNames[index],
            servicesData[index].Name,
            servicesData[index].Quantity,
            servicesData[index].USD,
            servicesData[index].CRC
          );
        } else {
          managedToChangeIcon = false;
        }
      }
    }
    return managedToChangeIcon;
  };

  const deleteService = (index) => {
    const serviceName = servicesData[index].Name;
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the ${serviceName} service?`
    );
    if (confirmDelete) {
      console.log("[DeleteService] The user typed yes");
      // Delete the service from the table
    } else {
      console.log("[DeleteService] The user typed no");
    }
  };

  useEffect(() => {
    setServicesData(servicesWithQuantityAndPrices);
    setDisabledButtons(Array(servicesWithQuantityAndPrices.length).fill(true));
    setButtonIconOfModify(
      Array(servicesWithQuantityAndPrices.length).fill(<BsPencil />)
    );
    const names = servicesWithQuantityAndPrices.map((obj) => obj.Name);
    setOriginalNames(names);
  }, [servicesWithQuantityAndPrices]);

  return (
    <>
      {readyToLoad() && (
        <div>
          <div className="grid grid-cols-7 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4 flex-justifiy">
            <Button text={"Create"} />
          </div>
          <Table colums={columnNames}>
            {servicesData.map((service, index) => (
              <TableItem
                key={index}
                number={index}
                data={[
                  <InputButton
                    placeholderText={servicesData[index].Name}
                    disabled={disabledButtons[index]}
                    type={["Name", index]}
                    onChangeFunction={modifyValueInTable}
                  />,
                  <InputButton
                    placeholderText={checkQuantity(service.Quantity)}
                    disabled={disabledButtons[index]}
                    type={["Quantity", index]}
                    onChangeFunction={modifyValueInTable}
                  />,
                  <InputButton
                    placeholderText={service.USD}
                    disabled={disabledButtons[index]}
                    type={["USD", index]}
                    onChangeFunction={modifyValueInTable}
                  />,
                  <InputButton
                    placeholderText={service.CRC}
                    disabled={disabledButtons[index]}
                    type={["CRC", index]}
                    onChangeFunction={modifyValueInTable}
                  />,
                  <Button
                    text={buttonIconOfModify[index]}
                    type="icon"
                    onclickFunction={() => {
                      const changedButtonIcon = changeButtonIcon(
                        "Modify",
                        index
                      );
                      if (changedButtonIcon) {
                        enableInput(index);
                      }
                    }}
                  />,
                  <Button
                    text={<TiDeleteOutline />}
                    type="icon"
                    onclickFunction={() => {
                      deleteService(index);
                    }}
                  />,
                ]}
              />
            ))}
          </Table>
        </div>
      )}
    </>
  );
};

export default Services;
