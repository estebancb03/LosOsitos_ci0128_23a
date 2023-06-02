import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";
import { useEffect, useState } from "react";
import useSettingCapacity from "../../hooks/useSettingCapacity";
import useUpdateCapacity from "../../hooks/useUpdateCapacity";

const Capacity = () => {
  const { capacityValues } = useSettingCapacity();
  const [campingOnlineCapacity, setCampingOnlineCapacity] = useState(0);
  const [campingOnSiteCapacity, setCampingOnSiteCapacity] = useState(0);
  const [picnicOnlineCapacity, setPicnicOnlineCapacity] = useState(0);
  const [picnicOnSiteCapacity, setPicnicOnSiteCapacity] = useState(0);
  const [modifyButton1, setModifyButton1] = useState("Modify");
  const [modifyButton2, setModifyButton2] = useState("Modify");
  const [disabledButtons, setDisabledButtons] = useState({
    campingCapacity: true,
    picnicCapacity: true,
  });
  const [isValidDataCamping, setIsValidDataCamping] = useState(true);
  const [isValidDataPicnic, setIsValidDataPicnic] = useState(true);

  const columnNames = ["Type", "Online", "On Site", "Action"];
  const rowNames = ["Camping", "Picnic"];

  const checkValuesEntered = (stateModified) => {
    const regex = /^(0|[1-9]\d*)$/;
    let successfulConversion = true;
    switch (stateModified) {
      case 0:
        regex.test(campingOnlineCapacity)
          ? setCampingOnlineCapacity(parseInt(campingOnlineCapacity, 10))
          : (successfulConversion = false);
        break;

      case 1:
        regex.test(campingOnSiteCapacity)
          ? setCampingOnSiteCapacity(parseInt(campingOnSiteCapacity, 10))
          : (successfulConversion = false);
        break;

      case 2:
        regex.test(picnicOnlineCapacity)
          ? setPicnicOnlineCapacity(parseInt(picnicOnlineCapacity, 10))
          : (successfulConversion = false);
        break;

      case 3:
        regex.test(picnicOnSiteCapacity)
          ? setPicnicOnSiteCapacity(parseInt(picnicOnSiteCapacity, 10))
          : (successfulConversion = false);
        break;
    }
    return successfulConversion;
  };

  const modifyHandleClick = (stateModified) => {
    if (stateModified < 2) {
      if (modifyButton1 === "Save") {
        if (checkValuesEntered(0) && checkValuesEntered(1)) {
          setIsValidDataCamping(true);
        } else {
          setIsValidDataCamping(false);
        }
      }
    } else {
      if (checkValuesEntered(2) && checkValuesEntered(3)) {
        setIsValidDataPicnic(true);
      } else {
        setIsValidDataPicnic(false);
      }
    }
    return;
  };

  const modifyButton = (buttonNumber) => {
    if (buttonNumber === 0) {
      if (modifyButton1 === "Save") {
        if (checkValuesEntered(0) && checkValuesEntered(1)) {
          setModifyButton1("Modify");
          if (isValidDataCamping && campingOnlineCapacity !== 0) {
            useUpdateCapacity("CampingOnline", campingOnlineCapacity);
            useUpdateCapacity("CampingOnSite", campingOnSiteCapacity);
          }
        }
      } else {
        setModifyButton1("Save");
      }
    } else {
      if (modifyButton2 === "Save") {
        if (checkValuesEntered(2) && checkValuesEntered(3)) {
          setModifyButton2("Modify");
          if (isValidDataPicnic && picnicOnlineCapacity !== 0) {
            useUpdateCapacity("PicnicOnline", picnicOnlineCapacity);
            useUpdateCapacity("PicnicOnSite", picnicOnSiteCapacity);
          }
        }
      } else {
        setModifyButton2("Save");
      }
    }
  };

  const enableInput = (buttonNumber) => {
    if (isValidDataCamping && isValidDataPicnic) {
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
    type === "CampingOnline"
      ? setCampingOnlineCapacity(value)
      : type === "CampingOnSite"
      ? setCampingOnSiteCapacity(value)
      : type === "PicnicOnline"
      ? setPicnicOnlineCapacity(value)
      : setPicnicOnSiteCapacity(value);
  };

  useEffect(() => {
    modifyHandleClick(0);
  }, [campingOnlineCapacity]);

  useEffect(() => {
    modifyHandleClick(1);
  }, [campingOnSiteCapacity]);

  useEffect(() => {
    modifyHandleClick(2);
  }, [picnicOnlineCapacity]);

  useEffect(() => {
    modifyHandleClick(3);
  }, [picnicOnSiteCapacity]);

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
                      modifyButton(0);
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
                      modifyButton(1);
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
