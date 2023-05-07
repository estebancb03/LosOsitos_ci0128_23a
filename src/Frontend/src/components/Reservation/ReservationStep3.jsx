import { useEffect, useState } from "react";
import Button from "../Button";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import CampingTentsMap from "../../assets/images/CampingTentsMap.jpg";
import axiosClient from "../../config/AxiosClient";

const ReservationStep3 = () => {
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
      console.log("Success");
    } else {
      alert("To proceed, please add at least one spot to your reservation");
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

  return (
    <>
      {readyToLoad() && (
        <div className="grid grid-cols-1 gap-2 content-center">
          <div className="align-center">
            <img
              src={CampingTentsMap}
              className=" h-auto w-auto rounded-lg rounded-bg border-4 border-black align-center"
            />
          </div>
          <div className="ml-4">
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
            <div className="w-1/3 mt-10 ml-[67%]">
              <Button
                text="Continue"
                onclickFunction={(e) => {
                  checkParcelWasAdded();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationStep2;
