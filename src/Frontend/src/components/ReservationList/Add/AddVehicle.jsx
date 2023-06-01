import Button from "../../Buttons/Button";
import InputButton from "../../Buttons/InputButton";

const AddVehicle = (props) => {
  // Props
  const {
    disabledElements,
    currentRecord,
    setCurrentRecord
  } = props;

  // Method that adds a input and a "" to the array
  const addVehicle = () => {
    const newMainRecordInfo = { ...currentRecord };
    let vehicles = [...currentRecord.NewVehicles];
    vehicles = [...vehicles, ""];
    newMainRecordInfo.NewVehicles = vehicles;
    setCurrentRecord(newMainRecordInfo);
  };

  // Method that changes the vehicle
  const changeVehicle = (type, value) => {
    const newRecord = { ...currentRecord };
    if (type[0] === "newVehicles") {
      const newVehicles = [...newRecord.NewVehicles];
      newVehicles[type[1]] = value;
      newRecord.NewVehicles = newVehicles;
    }
    setCurrentRecord(newRecord);
  };

  return (
    <>
    <div className="mb-3 mt-6">
        <Button
          text="Add vehicle"
          type="add"
          disabled={disabledElements}
          onclickFunction={() => addVehicle()}
        />
      </div>
      <div className="grid grid-cols-2">
        {currentRecord.NewVehicles &&
          currentRecord.NewVehicles.map((vehicle, index) => (
            <div key={index}>
              {index %2 === 0 ? (
                <div className="my-1 mr-3">
                  <InputButton
                    key={index}
                    text=" "
                    type={["newVehicles", index]}
                    placeholderText={vehicle}
                    disabled={disabledElements}
                    onChangeFunction={changeVehicle}
                  />
                </div>
                ) : (
                  <div className="my-1 ml-3">
                    <InputButton
                      key={index}
                      text=" "
                      type={["newVehicles", index]}
                      placeholderText={vehicle}
                      disabled={disabledElements}
                      onChangeFunction={changeVehicle}
                    />
                  </div>
                  )}
            </div>
          ))}
      </div>
    </>
  );
};

export default AddVehicle;
