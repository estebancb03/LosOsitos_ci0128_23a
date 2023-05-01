import { useState } from "react";
import Button from "../Button";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import CampingTentsMap from "../../assets/images/CampingTentsMap.jpg";
import Reservation2Data from "./Reservation2Data";

const ReservationStep2 = () => {
  const columns = [
    "Available Tents",
    "Type",
    "Size [square foot]",
    "Currency",
    "Price",
    "",
  ];

  const [quantitySmallSpot, setQuantitySmallSpot] = useState(0);
  const [quantityMediumSpot, setQuantityMediumSpot] = useState(0);
  const [quantityBigSpot, setQuantityBigSpot] = useState(0);
  const [quantityAdded, setQuantityAdded] = useState(0);

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
        </div>
      </div>
    </>
  );
};

export default ReservationStep2;
