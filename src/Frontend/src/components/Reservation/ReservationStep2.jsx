import { useEffect, useState } from "react";
import AxiosClient from "../../config/AxiosClient";
import Button from "../Button";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import CampingTentsMap from "../../assets/images/CampingTentsMap.jpg";
import Reservation2Data from "./Reservation2Data";
import axiosClient from "../../config/AxiosClient";

const ReservationStep2 = () => {
  const [availableSpots, setAvailableSpots] = useState();
  const [quantitySmallSpot, setQuantitySmallSpot] = useState(0);
  const [quantityMediumSpot, setQuantityMediumSpot] = useState(0);
  const [quantityBigSpot, setQuantityBigSpot] = useState(0);
  const [quantityAdded, setQuantityAdded] = useState(0);

  const getAvailableSpotsByDates = async () => {
    try {
      let startDate = "2020-01-01T06:15:20.000";
      let endDate = "2023-02-02T16:00:00.000";
      const url =
        "/getAvailableSpotsByDates/2020-01-01T06:15:20.000/2023-02-02T17:20:00.000";

      const url2 = `/getAvailableSpotsByDates/${startDate}/${endDate}`;
      const result = await axiosClient.get(url);
      setAvailableSpots();
      console.log(result);
    } catch (exception) {
      console.error(exception);
    }
  };
  const columns = [
    "Available Tents",
    "Type",
    "Size [square foot]",
    "Currency",
    "Price",
    "",
  ];

  const handleClick = (typeOfSpot, location) => {
    setQuantityAdded(quantityAdded + 1);
    // Verify that the customer can't add more spots than
    // the ones available
    if (quantityAdded < Reservation2Data.length) {
      typeOfSpot == "Small"
        ? setQuantitySmallSpot(quantitySmallSpot + 1)
        : typeOfSpot == "Medium"
        ? setQuantityMediumSpot(quantityMediumSpot + 1)
        : setQuantityBigSpot(quantityBigSpot + 1);
      alert("Added the spot[" + location + "] to your reservation");
    } else {
      alert("There aren't any spots left. Please continue");
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

  return (
    <>
      <div className="grid grid-cols-1 gap-2 content-center">
        <div className="align-center">
          <img
            src={CampingTentsMap}
            className=" h-auto w-auto rounded-lg rounded-bg border-4 border-black align-center"
          />
        </div>
        <div className="ml-4">
          <Table colums={columns}>
            {Reservation2Data.map((item, index) => (
              <TableItem
                key={index}
                number={index}
                data={[
                  item.location,
                  typeOfSpot(item.size),
                  item.size,
                  item.currency,
                  item.price,
                  <Button
                    text="+"
                    type="add"
                    onclickFunction={(e) => {
                      handleClick(typeOfSpot(item.size), item.location);
                    }}
                  />,
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
    </>
  );
};

export default ReservationStep2;
