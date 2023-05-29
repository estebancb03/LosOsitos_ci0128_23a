import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";
import { useState } from "react";
import useSettingCapacity from "../../hooks/useSettingCapacity";

const Capacity = () => {
  const { capacityValues } = useSettingCapacity();
  const columnNames = ["Type", "Online", "On Site", "Action"];
  const rowNames = ["Camping", "Picnic"];
  const [modifyButton1, setModifyButton1] = useState("Modify");
  const [modifyButton2, setModifyButton2] = useState("Modify");
  const [newCapacityValues, setNewCapacityValues] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState({
    campingCapacity: true,
    picnicCapacity: true,
  });

  const checkValuesEntered = () => {
    let succesfulConversion = true;
    if (newCapacityValues.length > 0) {
      for (let i = 0; i < 4 && succesfulConversion; ++i) {
        if (!Number.isInteger(newCapacityValues[i].Value)) {
          const parsedInt = parseInt(newCapacityValues[i].Value, 10);
          if (
            !newCapacityValues[i].Value.includes(".") &&
            validNumber(parsedInt)
          ) {
            newCapacityValues[i].Value = parsedInt;
          } else {
            alert(
              "Values from the capacity can only be positive and intergers. Changes will not be applied"
            );
            succesfulConversion = false;
          }
        }
      }
    }
    return succesfulConversion;
  };

  const modifyHandleClick = (buttonNumber, type) => {
    if (buttonNumber === 1) {
      if (modifyButton1 === "Modify") {
        setModifyButton1("Save changes");
      } else {
        if (checkValuesEntered()) {
          setModifyButton1("Modify");
        }
      }
    } else {
      if (modifyButton2 === "Modify") {
        setModifyButton2("Save changes");
      } else {
        if (checkValuesEntered()) {
          setModifyButton2("Modify");
        }
      }
    }
  };

  const setButtonState = (buttonNumber) => {
    const newDisabledButtons = { ...disabledButtons };
    if (buttonNumber === 0) {
      newDisabledButtons.campingCapacity =
        newDisabledButtons.campingCapacity === true ? false : true;
    } else {
      newDisabledButtons.picnicCapacity =
        newDisabledButtons.picnicCapacity === true ? false : true;
    }
    setDisabledButtons(newDisabledButtons);
  };

  const validNumber = (numberEntered) => {
    return (
      numberEntered > 0 &&
      Number.isInteger(numberEntered) &&
      !isNaN(numberEntered)
    );
  };

  const modifyCapacityValues = (type, value) => {
    const newValuesEntered = [...capacityValues];
    type === "CampingOnline"
      ? (newValuesEntered[0].Value = value)
      : type === "CampingOnSite"
      ? (newValuesEntered[1].Value = value)
      : type === "PicnicOnline"
      ? (newValuesEntered[2].Value = value)
      : (newValuesEntered[3].Value = value);
    setNewCapacityValues(newValuesEntered);
  };

  const readyToLoad = () => {
    return capacityValues.length > 0;
  };
  return (
    <>
      {readyToLoad() && (
        <div>
          <div>
            <Table colums={columnNames}>
              <TableItem
                key={0}
                number={0}
                data={[
                  rowNames[0],
                  <InputButton
                    placeholderText={capacityValues[0].Value}
                    disabled={disabledButtons.campingCapacity}
                    type="CampingOnline"
                    onChangeFunction={modifyCapacityValues}
                  />,
                  <InputButton
                    placeholderText={capacityValues[1].Value}
                    disabled={disabledButtons.campingCapacity}
                    type="CampingOnSite"
                    onChangeFunction={modifyCapacityValues}
                  />,
                  <Button
                    text={modifyButton1}
                    onclickFunction={() => {
                      modifyHandleClick(1);
                      setButtonState(0);
                    }}
                  />,
                ]}
              />
              <TableItem
                key={1}
                number={1}
                data={[
                  rowNames[1],
                  <InputButton
                    placeholderText={capacityValues[2].Value}
                    disabled={disabledButtons.picnicCapacity}
                    type="PicnicOnline"
                    onChangeFunction={modifyCapacityValues}
                  />,
                  <InputButton
                    placeholderText={capacityValues[3].Value}
                    disabled={disabledButtons.picnicCapacity}
                    type="PicnicOnSite"
                    onChangeFunction={modifyCapacityValues}
                  />,
                  <Button
                    text={modifyButton2}
                    onclickFunction={() => {
                      modifyHandleClick(2);
                      setButtonState(1);
                    }}
                  />,
                ]}
              />
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default Capacity;
