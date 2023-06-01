import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";
import { useEffect, useState } from "react";
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
  const [applyChanges, setApplyChanges] = useState(true);

  const checkValuesEntered = () => {
    let succesfulConversion = true;
    let arrayLength = newCapacityValues.length;
    if (arrayLength > 0) {
      const regex = /^(0|[1-9]\d)+$/;
      for (let i = 0; i < arrayLength && succesfulConversion; ++i) {
        if (regex.test(newCapacityValues[i].Value)) {
          newCapacityValues[i].Value = parseInt(newCapacityValues[i].Value, 10);
        } else {
          succesfulConversion = false;
        }
      }
    }
    return succesfulConversion;
  };

  const modifyHandleClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      if (modifyButton1 === "Save") {
        if (checkValuesEntered()) {
          setModifyButton1("Modify");
          setApplyChanges(true);
        } else {
          setApplyChanges(false);
        }
      }
    } else {
      if (modifyButton2 === "Modify") {
        setModifyButton2("Save");
      } else {
        if (checkValuesEntered()) {
          setModifyButton2("Modify");
          setApplyChanges(true);
        }
      }
    }
    return;
  };

  const modfiyButton = (buttonNumber) {
    if(buttonNumber === 1) {

    } else {
      
    }
  }

  const enableInput = (buttonNumber) => {
    if (applyChanges) {
      const newDisabledButtons = { ...disabledButtons };
      if (buttonNumber === 0) {
        newDisabledButtons.campingCapacity =
          newDisabledButtons.campingCapacity === true ? false : true;
      } else {
        newDisabledButtons.picnicCapacity =
          newDisabledButtons.picnicCapacity === true ? false : true;
      }
      setDisabledButtons(newDisabledButtons);
    } else {
      alert(
        "Values from the capacity can only be positive and intergers." +
          "\nChanges will not be applied"
      );
    }
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

  useEffect(() => {
    modifyHandleClick(1);
  }, [newCapacityValues]);

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
                      enableInput(0);
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
                      enableInput(1);
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
