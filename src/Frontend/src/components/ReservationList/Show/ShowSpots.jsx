import {useState, useEffect} from  "react";
import InputButton from "../../Buttons/InputButton";

const ShowSpots = (props) => {
  // Props
  const {
    disabledElements,
    reservation,
    setReservation
  } = props;

  // Method that changes the spots
  const changeSpots = (type, value) => {
    const newReservation = {...reservation};
    const newSpots = [...newReservation.Spots];
    newSpots[type[0]].Location_Spot = value;
    newReservation.Spots = newSpots;
    setReservation(newReservation);
  };

  return (
    <>
      { reservation.Reservation_Type === 1 && (
        <div className="mb-3 mt-6">
          <label className="block text-xl font-semibold leading-6 text-gray-900">Spots</label>
          <div className="grid grid-cols-2">
            { reservation.Spots &&
              reservation.Spots.map((spot, index) => (
              <div key={index}>
                {index %2 === 0 ? (
                  <div className="my-1 mr-3">
                    <InputButton
                      text=" "
                      type={[index]}
                      placeholderText={spot.Location_Spot}
                      disabled={disabledElements}
                      onChangeFunction={changeSpots}
                    />
                  </div>
                ) : (
                  <div className="my-1 ml-3">
                    <InputButton
                      text=" "
                      type={[index]}
                      placeholderText={spot.Location_Spot}
                      disabled={disabledElements}
                      onChangeFunction={changeSpots}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ShowSpots;
