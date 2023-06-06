import {useState, useEffect} from "react";
import InputButton from "../../Buttons/InputButton";
import DropDownSelect from "../../Buttons/DropDownSelect";
import useSpot from "../../../hooks/useSpot";
import AddSpot from "../Add/AddSpot";
import ShowFee from "./ShowFee";
import useCalculateFees from "../../../hooks/useCalculateFees";

const ShowSpots = (props) => {
  const {
    disabledElements,
    reservation,
    setReservation
  } = props;
  const {spots, locations, searchSpotPrice, searchSpotSize} = useSpot();
  const {calculateAllSpotsFee} = useCalculateFees(reservation);

  const changeSpot = (type, value) => {
    const newReservation = {...reservation};
    const currency = reservation.Country_Name === "Costa Rica" ? "CRC" : "USD";
    let spots = [...reservation.Spots];
    if (type[0] === "location") {
      spots[type[1]].Location_Spot = parseInt(value);
      spots[type[1]].Price = searchSpotPrice(parseInt(value), currency);
      spots[type[1]].Currency = currency;
    }
    newReservation.Spots = spots;
    setReservation(newReservation);
  };

  return (
    <>
    {reservation.Reservation_Type === 1 && (
        <div>
          <label className="block text-xl font-semibold leading-6 text-gray-900 mb-3 mt-6">
            Spots
          </label>
        </div>
      )}
      {(reservation.Reservation_Type === 1 && disabledElements === false) && (
        <AddSpot
          disabledElements={false}
          currentRecord={reservation}
          setCurrentRecord={setReservation}
        />
      )}
      {reservation.Spots &&
        reservation.Spots.map((spot, index) => (
          <div className="flex" key={index}>
            <div className="bg-gray-100 w-full rounded-sm mt-4">
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
                {disabledElements ? (
                  <div className="mt-1 mb-1.5 sm:mt-0">
                    <InputButton
                      type={["location", index]}
                      placeholderText={spot.Location_Spot}
                      disabled={disabledElements}
                      onChangeFunction={changeSpot}
                    />
                  </div>
                ) : (
                  <div className="mt-1 mb-1.5 sm:-mb-4">
                    <DropDownSelect
                      options={locations}
                      disabled={disabledElements}
                      typeChange={["location", index]}
                      selectedOption={spot.Location_Spot}
                      onChangeFunction={changeSpot}
                    />
                  </div>
                )}
                <div className="mt-1 mb-1.5 sm:mt-0">
                  <InputButton
                    type={["size", index]}
                    placeholderText={searchSpotSize(spot.Location_Spot)}
                    disabled={true}
                    onChangeFunction={changeSpot}
                  />
                </div>
              </div>
              <div className="h-1 bg-gray-200 rounded-sm my-2 mx-2"></div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
                <div>
                  <label className="block mt-4 mx-3 text-md font-regular leading-6 text-gray-900">
                    Price
                  </label>
                  <div className="">
                    {reservation.Country_Name === "Costa Rica" ? (
                      <div className="mt-1 mb-1">
                        <InputButton
                          type={["price", index]}
                          placeholderText={"₡" + spot.Price.toLocaleString("en-us")}
                          disabled={true}
                        />
                      </div>
                    ) : (
                      <div className="mt-1 mb-1">
                        <InputButton
                          type={["price", index]}
                          placeholderText={"$" + spot.Price.toLocaleString("en-us")}
                          disabled={true}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {reservation.Reservation_Type === 1 && (
        <ShowFee
          text="Subtotal"
          fees={calculateAllSpotsFee()}
        />
      )}
    </>
  );
};

export default ShowSpots;
