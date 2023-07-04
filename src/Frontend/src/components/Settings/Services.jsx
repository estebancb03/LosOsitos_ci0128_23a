import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import useServices from "../../hooks/useServices";
import { useState, useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import InputButton from "../Buttons/InputButton";
import Button from "../Buttons/Button";
import CreateService from "./CreateService";

const Services = () => {
  const {
    servicesWithQuantityAndPrices,
    updateServicesWithQuantityAndPrices,
    fetchServicesWithQuantityAndPrices,
    disableService,
  } = useServices();
  const columnNames = ["Name", "Inventory", "USD", "CRC", "Modify", "Delete"];

  const [viewModal, setViewModal] = useState(false);
  const [servicesData, setServicesData] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [buttonIconOfModify, setButtonIconOfModify] = useState([]);
  const [originalNames, setOriginalNames] = useState([]);

  const refreshPage = async () => {
    await fetchServicesWithQuantityAndPrices();
    setServicesData(servicesWithQuantityAndPrices);
    location.reload();
  };

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
    // Matches strings that consist of only letters (uppercase or lowercase),
    // spaces, parentheses (( and )), and square brackets ([ and ]).
    const regex = /^[A-Za-z \(\)\[\]]+$/;
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
    // Matches strings that represent positive integers
    const regex = /^(0|[1-9]\d*)$/;
    let successfulConversion = true;
    if (
      regex.test(servicesData[index].Quantity) ||
      servicesData[index].Quantity === "NA"
    ) {
      if (servicesData[index].Quantity === "NA") {
        servicesData[index].Quantity = 0;
      }
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
    // Matches numeric values, including integers and decimals, that do not contain commas.
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
      refreshPage();
      // Make a logical delete of the service
      disableService(originalNames[index]);
      refreshPage();
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
            <Button
              text={"Create"}
              datacy="create-service-button"
              onclickFunction={() => setViewModal(true)}
              exitFunction={refreshPage}
            />
            <CreateService
              viewModal={viewModal}
              datacy="create-service-modal"
              setViewModal={setViewModal}
              exitFunction={refreshPage}
            />
          </div>
          <Table colums={columnNames}>
            {servicesData.map((service, index) => (
              <TableItem
                key={index}
                number={index}
                datacy={`${servicesData[index].Name}-tr`}
                data={[
                  <InputButton
                    placeholderText={servicesData[index].Name}
                    disabled={disabledButtons[index]}
                    type={["Name", index]}
                    datacy={`service-modify-name-input-${servicesData[index].Name}`}
                    onChangeFunction={modifyValueInTable}
                  />,
                  <InputButton
                    placeholderText={checkQuantity(
                      servicesData[index].Quantity
                    )}
                    disabled={disabledButtons[index]}
                    type={["Quantity", index]}
                    datacy={`service-modify-quantity-input-${servicesData[index].Name}`}
                    onChangeFunction={modifyValueInTable}
                  />,
                  <InputButton
                    placeholderText={servicesData[index].USD}
                    disabled={disabledButtons[index]}
                    type={["USD", index]}
                    datacy={`service-modify-usd-price-input-${servicesData[index].Name}`}
                    onChangeFunction={modifyValueInTable}
                  />,
                  <InputButton
                    placeholderText={servicesData[index].CRC}
                    disabled={disabledButtons[index]}
                    type={["CRC", index]}
                    datacy={`service-modify-crc-price-input-${servicesData[index].Name}`}
                    onChangeFunction={modifyValueInTable}
                  />,
                  <Button
                    text={buttonIconOfModify[index]}
                    type="icon"
                    datacy={`service-modify-button-${servicesData[index].Name}`}
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
                    datacy={`service-delete-button-${servicesData[index].Name}`}
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
