import InputButton from "../../Buttons/InputButton";

const ShowVehicles = (props) => {
  // Props
  const {
    disabledElements,
    reservation,
    setReservation
  } = props;

  // Method tha changes the vehicles
  const changeVehicles = (type, value) => {
    const newReservation = {...reservation};
    const newVehicles = [...newReservation.Vehicles];
    newVehicles[type[0]].ID_Vehicle = value;
    newReservation.Spots = newVehicles;
    setReservation(newReservation);
  };

  return (
    <>
      <div className="mb-3 mt-6">
        <label className="block text-xl font-semibold leading-6 text-gray-900">Vehicles</label>
        <div className="grid grid-cols-2">
          { reservation.Vehicles &&
              reservation.Vehicles.map((vehicle, index) => (
                <div key={index}>
                  {index %2 === 0 ? (
                    <div className="my-1 mr-3">
                      <InputButton
                        text=" "
                        key={index}
                        type={[index]}
                        placeholderText={vehicle.ID_Vehicle}
                        disabled={disabledElements}
                        onChangeFunction={changeVehicles}
                      />
                    </div>
                    ) : (
                      <div className="my-1 ml-3">
                        <InputButton
                          text=" "
                          key={index}
                          type={[index]}
                          placeholderText={vehicle.ID_Vehicle}
                          disabled={disabledElements}
                          onChangeFunction={changeVehicles}
                        />
                      </div>
                      )}
                </div>
                ))}
        </div>
      </div>
    </>
  );
};

export default ShowVehicles;
