import Button from "../Buttons/Button";
import InputButton from "../Buttons/InputButton";

const ReservationListAddVehicles = ({
  disabledElements,
  mainRecordInfo,
  setMainRecordInfo,
}) => {
  // Method that adds a input and a "" to the array
  const addVehicle = () => {
    const newMainRecordInfo = { ...mainRecordInfo };
    let vehicles = [...mainRecordInfo.NewVehicles];
    vehicles = [...vehicles, ""];
    newMainRecordInfo.NewVehicles = vehicles;
    setMainRecordInfo(newMainRecordInfo);
  };

  // Method that modify the mainRecordInfo
  const modifyVehicle = (type, value) => {
    const newRecord = { ...mainRecordInfo };
    if (type[0] === "newVehicles") {
      const newVehicles = [...newRecord.NewVehicles];
      newVehicles[type[1]] = value;
      newRecord.NewVehicles = newVehicles;
    }
    setMainRecordInfo(newRecord);
  };

  return (
    <>
      <div className="mt-4 mb-2">
        <Button
          text="Add vehicle"
          type="add"
          disabled={disabledElements}
          onclickFunction={() => addVehicle()}
        />
      </div>
      <div className="grid grid-cols-2">
        {mainRecordInfo.NewVehicles &&
          mainRecordInfo.NewVehicles.map((vehicle, index) => (
            <InputButton
              key={index}
              type={["newVehicles", index]}
              placeholderText={vehicle}
              disabled={disabledElements}
              onChangeFunction={modifyVehicle}
            />
          ))}
      </div>
    </>
  );
};

export default ReservationListAddVehicles;
