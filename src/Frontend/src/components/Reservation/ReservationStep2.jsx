import { useState } from "react";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import Button from "../Button";
import CampingTentsMap from "../../assets/images/CampingTentsMap.jpg";

const ReservationStep2 = () => {
  const columns = [
    "Available Tents",
    "Type",
    "Size [square foot]",
    "Selection",
  ];
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
            <TableItem
              key={0}
              number={0}
              data={["1", "Small", "120", <input type="radio" name="button" />]}
            />
            <TableItem
              key={1}
              number={1}
              data={["2", "Small", "120", <input type="radio" name="button" />]}
            />
            <TableItem
              key={2}
              number={2}
              data={[
                "3",
                "Average",
                "121-180",
                <input type="radio" name="button" />,
              ]}
            />
          </Table>
        </div>
      </div>
    </>
  );
};

export default ReservationStep2;
