// import Table from "../Table/Table";
// import TableItem from "../Table/TableItem";
// import useServices from "../../hooks/useServices";
// import { useState, useEffect } from "react";
// import { BsPencil } from "react-icons/bs";
// import { TiDeleteOutline } from "react-icons/ti";
// import InputButton from "../Buttons/InputButton";
// import Button from "../Buttons/Button";

// const Services = () => {
//   const { servicesWithQuantityAndPrices } = useServices();
//   const columnNames = ["Name", "Inventory", "USD", "CRC", "Modify", "Delete"];
//   const [disabledButtons, setDisabledButtons] = useState([]);

//   const readyToLoad = () => {
//     console.log("Length is " + servicesWithQuantityAndPrices.length);
//     return servicesWithQuantityAndPrices.length > 0;
//   };

//   const checkQuantity = (quantity) => {
//     let validQuantity = 0;
//     quantity === 0 ? (validQuantity = "NA") : (validQuantity = quantity);
//     return validQuantity;
//   };

//   const enableIndex = (index) => {
//     console.log("[EnableIndex] Received the following index: " + index);
//     setDisabledButtons((prevButtons) =>
//       prevButtons.map((button, i) => (i === index ? !button : button))
//     );
//   };

//   const modifyInventoryValue = (value) => {
//     console.log(
//       "[ModidyInventoryValue] Trying to mod..." +
//         "\n[ModifyInventoryValue] Received the following value: " +
//         value
//     );
//   };

//   const modifyPriceValue = (value) => {
//     console.log(
//       "[ModifyPriceValue] Trying to mod..." +
//         "\n[ModifyPriceValue] Received the following value: " +
//         value
//     );
//   };

//   const modifyValueInTable = (type, value) => {
//     const columnToModify = type[0];
//     columnToModify === "Quantity"
//       ? modifyInventoryValue(value)
//       : modifyPriceValue(value);
//   };

//   useEffect(() => {
//     setDisabledButtons(Array(servicesWithQuantityAndPrices.length).fill(true));
//   }, [servicesWithQuantityAndPrices]);

//   return (
//     <>
//       {readyToLoad() && (
//         <div>
//           <Table colums={columnNames}>
//             {servicesWithQuantityAndPrices.map((service, index) => (
//               <TableItem
//                 key={index}
//                 number={index}
//                 data={[
//                   service.Name,
//                   <InputButton
//                     placeholderText={checkQuantity(service.Quantity)}
//                     disabled={disabledButtons[index]}
//                     type={["Quantity", index]}
//                     onChangeFunction={modifyValueInTable}
//                   />,
//                   <InputButton
//                     placeholderText={service.USD}
//                     disabled={disabledButtons[index]}
//                     type={["USD", index]}
//                     onChangeFunction={modifyValueInTable}
//                   />,
//                   <InputButton
//                     placeholderText={service.CRC}
//                     disabled={disabledButtons[index]}
//                     type={["CRC", index]}
//                     onChangeFunction={modifyValueInTable}
//                   />,
//                   <Button
//                     text={<BsPencil />}
//                     onclickFunction={() => {
//                       enableIndex(index);
//                     }}
//                   />,
//                   <Button text={<TiDeleteOutline />} />,
//                 ]}
//               />
//             ))}
//           </Table>
//           <div className="grid grid-cols-10 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4 ">
//             <Button text={"Create"} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Services;

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
  const { servicesWithQuantityAndPrices } = useServices();
  const columnNames = ["Name", "Inventory", "USD", "CRC", "Modify", "Delete"];

  const [servicesData, setServicesData] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [buttonIconOfModify, setButtonIconOfModify] = useState([]);
  const [buttonIconOfDelete, setButtonIconOfDelete] = useState([]);
  const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const readyToLoad = () => {
    console.log("Length is " + servicesWithQuantityAndPrices.length);
    return servicesWithQuantityAndPrices.length > 0;
  };

  const checkQuantity = (quantity) => {
    console.log(
      "Entered the checkQuantity with the following quantity " + quantity
    );
    let validQuantity = 0;
    quantity === 0 ? (validQuantity = "NA") : (validQuantity = quantity);
    return validQuantity;
  };

  const modifyInventoryValue = (index, value) => {
    setServicesData((prevServicesData) => {
      const updatedData = [...prevServicesData];
      updatedData[index].Quantity = value;
      return updatedData;
    });
  };

  const modifyPriceValue = (columnToModify, index, value) => {
    console.log(
      "[ModifyPriceValue] columnToModify: " +
        columnToModify +
        "\n[ModifyPriceValue] Index: " +
        index +
        "\n[ModfiyPriceValue] Value: " +
        value
    );
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
    console.log(
      "[ModifyValueInTable] Type: " +
        columnToModify +
        "\n[ModifyValueInTable] Index: " +
        indexToModify +
        "\n[ModifyValueInTable] Value: " +
        value
    );
    columnToModify === "Quantity"
      ? modifyInventoryValue(indexToModify, value)
      : modifyPriceValue(columnToModify, indexToModify, value);
  };

  const enableIndex = (index) => {
    console.log("[EnableIndex] Received the following index: " + index);
    setDisabledButtons((prevButtons) =>
      prevButtons.map((button, i) => (i === index ? !button : button))
    );
  };

  const changeButtonIcon = (buttonToModify, index) => {
    if (buttonToModify === "Modify") {
      setButtonIconOfModify((prevIcons) => {
        const updatedIcons = [...prevIcons];
        const currentIcon = updatedIcons[index];
        if (currentIcon.type === BsPencil) {
          updatedIcons[index] = <BsCheck2 />;
        } else {
          updatedIcons[index] = <BsPencil />;
        }
        return updatedIcons;
      });
    }
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
  }, [servicesWithQuantityAndPrices]);

  return (
    <>
      {readyToLoad() && (
        <div>
          <Table colums={columnNames}>
            {servicesData.map((service, index) => (
              <TableItem
                key={index}
                number={index}
                data={[
                  servicesData[index].Name,
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
                      changeButtonIcon("Modify", index);
                      enableIndex(index);
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
          <div className="grid grid-cols-10 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4 ">
            <Button text={"Create"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
