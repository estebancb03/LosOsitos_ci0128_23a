import { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import CampingTentsMap from "../../assets/images/CampingTentsMap.jpg";
import axiosClient from "../../config/AxiosClient";

const ReservationStep3 = ({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) => {
  const [availableSpots, setAvailableSpots] = useState([]);
  const [quantitySmallSpot, setQuantitySmallSpot] = useState(0);
  const [quantityMediumSpot, setQuantityMediumSpot] = useState(0);
  const [quantityBigSpot, setQuantityBigSpot] = useState(0);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [selectedSpots, setSelectedSpots] = useState([]);

  const columns = [
    "Available Spots",
    "Type",
    "Size [square foot]",
    "Currency",
    "Price",
    "Action",
  ];

  const getAvailableSpotsByDates = async () => {
    try {
      let startDate = "2020-01-01T06:15:20.000";
      let endDate = "2023-02-02T16:00:00.000";
      const url = `/getAvailableSpotsByDates/${startDate}/${endDate}`;
      const result = await axiosClient.get(url);
      console.log(result.data);
      setAvailableSpots(result.data);
    } catch (exception) {
      console.error(exception);
    }
  };

  const typeOfSpot = (size) => {
    let result;
    size < 120
      ? (result = "Small")
      : size < 180
      ? (result = "Medium")
      : (result = "Big");
    return result;
  };

  const checkParcelWasAdded = () => {
    if (
      quantitySmallSpot != 0 ||
      quantityMediumSpot != 0 ||
      quantityBigSpot != 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    getAvailableSpotsByDates();
  }, []);

  const readyToLoad = () => {
    return availableSpots && availableSpots.length > 0;
  };

  const handleCheckboxClick = (e, typeOfSpot) => {
    const locationPassed = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      // Verify that the customer can't add more spots than
      // the ones available
      if (quantityAdded < 3) {
        if (typeOfSpot == "Small") {
          setQuantitySmallSpot(quantitySmallSpot + 1);
        } else {
          if (typeOfSpot == "Medium") {
            setQuantityMediumSpot(quantityMediumSpot + 1);
          } else {
            setQuantityBigSpot(quantityBigSpot + 1);
          }
          setQuantityAdded(quantityAdded + 1);
          setSelectedSpots([...selectedSpots, parseInt(locationPassed)]);
        }
      } else {
        alert("There aren't any spots left. Please continue");
        e.target.checked = false;
      }
    } else {
      if (quantityAdded > 0) {
        if (typeOfSpot == "Small") {
          if (quantitySmallSpot > 0) {
            setQuantitySmallSpot(quantitySmallSpot - 1);
          }
        } else {
          if (typeOfSpot == "Medium") {
            if (quantityMediumSpot > 0) {
              setQuantityMediumSpot(quantityMediumSpot - 1);
            }
          } else {
            if (quantityBigSpot > 0) {
              setQuantityBigSpot(quantityBigSpot - 1);
            }
          }
        }
        setQuantityAdded(quantityAdded - 1);
        setSelectedSpots(
          selectedSpots.filter(
            (location) => parseInt(location) !== parseInt(locationPassed)
          )
        );
      }
    }
  };

  const updateReservationData = () => {
    if (checkParcelWasAdded()) {
      const newReservationData = {...reservationData};
      const newWindows = { ...windows };
      newWindows.Step3 = false;
      newWindows.Step5 = true;
      let spots = [];
      selectedSpots.map((spot) => spots.push({
        Location_Spot: spot,
        Price: 0.0
      }));
      newReservationData.Spots = spots;
      setReservationData(newReservationData);
      setWindows(newWindows);
    } else {
      alert("To proceed, please add at least one spot to your reservation");
    }
  };

  return (
    <>
      {windows.Step3 && readyToLoad() && (
        <div className="grid grid-cols-1 gap-2 content-center">
          <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">Spots selection</h2>
          <div className="align-center">
            <img
              src={CampingTentsMap}
              className=" h-auto w-auto rounded-lg rounded-bg border-4 border-black align-center"
            />
          </div>
          <div className="">
            <Table colums={columns}>
              {availableSpots.map((item, index) => (
                <TableItem
                  key={index}
                  number={index}
                  data={[
                    item.Location,
                    typeOfSpot(item.Size),
                    item.Size,
                    item.Currency,
                    item.Price,
                    <input
                      type="checkbox"
                      value={item.Location}
                      onChange={(e) =>
                        handleCheckboxClick(e, typeOfSpot(item.size))
                      }
                    ></input>,
                  ]}
                />
              ))}
            </Table>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4">
            <Button
              text="Back"
              onclickFunction={(e) => {
                const newWindows = { ...windows };
                newWindows.Step2 = true;
                newWindows.Step3 = false;
                setWindows(newWindows);
              }}
            />
            <Button
              text="Next"
              onclickFunction={() => {
                updateReservationData();
              }}
            />
            <div className="mb-1"></div>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationStep3;
