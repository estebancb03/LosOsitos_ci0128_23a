import { useState } from "react";
import { getTicketPrices, getCountries } from "../../Queries";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import Button from "../Button";

const ReservationStep1 = () => {
  const columns = ["Type", "Price", "Quantity", "", ""];
  console.log(getTicketPrices());
  const ticketPrices = getTicketPrices();
  //console.log("Ticket prices is: " + typeof ticketPrices);
  // console.log(
  //   "Is query result an array?\nAnswer: " +
  //     Array.isArray(queryResult) +
  //     "\n It is a: " +
  //     typeof queryResult
  // );
  // console.log("Testing is: " + Object.values(queryResult));
  // const ticketPrices = Array.from(queryResult);
  // console.log(
  //   "Ticket prices is an array?: " +
  //     Array.isArray(ticketPrices) +
  //     " and its values are:\n" +
  //     ticketPrices[1]
  // );
  const picnicAdultPricesCRC = ticketPrices.filter(
    (ticketPrice) => ticketPrice.Age_Range == 0 && ticketPrice.Currency == "CRC"
  );
  // console.log("Printing adult ticket prices\n" + picnicAdultPricesCRC);
  const picnicChildPricesCRC = [];
  const picnicAdultPricesUSD = [];
  const picnicChildPricesUSD = [];
  const campingAdultPricesCRC = [];
  const campingChildPricesCRC = [];
  const campingAdultPricesUSD = [];
  const campingChildPricesUSD = [];
  console.log(getTicketPrices());
  const names = [
    "Domestic Adult",
    "Domestic Child*",
    "Foreign Adult",
    "Foreign Child*",
  ];
  const prices = [
    "₡4520",
    "₡3390",
    "$18.08",
    "$10.17",
    "₡2260",
    "₡1130",
    "$13.56",
    "$5.65",
  ];
  const [quantityAdultPicnic, setQuantityAdultPicnic] = useState(0);
  const [quantityChildPicnic, setQuantityChildPicnic] = useState(0);
  const [quantityForeignAdultPicnic, setQuantityForeignAdultPicnic] =
    useState(0);
  const [quantityForeignChildPicnic, setQuantityForeignChildPicnic] =
    useState(0);
  const [quantityAdultCamping, setQuantityAdultCamping] = useState(0);
  const [quantityChildCamping, setQuantityChildCamping] = useState(0);
  const [quantityForeignAdultCamping, setQuantityForeignAdultCamping] =
    useState(0);
  const [quantityForeignChildCamping, setQuantityForeignChildCamping] =
    useState(0);

  const handleClickAdd = (e, quantityType) => {
    console.log(quantityType);
    switch (quantityType) {
      case 1:
        if (quantityAdultCamping == 10) {
          alert("You can only buy 10 tickets per person.");
        } else {
          setQuantityAdultCamping(quantityAdultCamping + 1);
        }
        console.log(quantityAdultCamping);
        break;

      case 2:
        if (quantityChildCamping == 10) {
          alert("You can only buy 10 tickets per person.");
        } else {
          setQuantityChildCamping(quantityChildCamping + 1);
        }
        break;

      case 3:
        if (quantityForeignAdultCamping == 10) {
          alert("You can only buy 10 tickets per person.");
        } else {
          setQuantityForeignAdultCamping(quantityForeignAdultCamping + 1);
        }
        break;

      case 4:
        if (quantityForeignChildCamping == 10) {
          alert("You can only buy 10 tickets per person.");
        } else {
          setQuantityForeignChildCamping(quantityForeignChildCamping + 1);
        }
        break;

      case 5:
        if (quantityAdultPicnic == 10) {
          alert("You can only buy 10 tickets per person.");
        } else {
          setQuantityAdultPicnic(quantityAdultPicnic + 1);
        }
        break;

      case 6:
        if (quantityChildPicnic == 10) {
          alert("You can only buy 10 tickets per person.");
        } else {
          setQuantityChildPicnic(quantityChildPicnic + 1);
        }
        break;

      case 7:
        if (quantityForeignAdultPicnic == 10) {
          alert("You can only buy 10 tickets per person.");
        } else {
          setQuantityForeignAdultPicnic(quantityForeignAdultPicnic + 1);
        }
        break;

      case 8:
        if (quantityForeignChildPicnic == 10) {
          alert("You can only buy 10 tickets per person.");
        } else {
          setQuantityForeignChildPicnic(quantityForeignChildPicnic + 1);
        }
        break;
    }
  };

  const handleClickSubstract = (e, quantityType) => {
    console.log(quantityType);
    switch (quantityType) {
      case 1:
        if (quantityAdultCamping != 0) {
          setQuantityAdultCamping(quantityAdultCamping - 1);
        }
        console.log(quantityAdultCamping);
        break;

      case 2:
        if (quantityChildCamping != 0) {
          setQuantityChildCamping(quantityChildCamping - 1);
        }
        break;

      case 3:
        if (quantityForeignAdultCamping != 0) {
          setQuantityForeignAdultCamping(quantityForeignAdultCamping - 1);
        }
        break;

      case 4:
        if (quantityForeignChildCamping != 0) {
          setQuantityForeignChildCamping(quantityForeignChildCamping - 1);
        }
        break;

      case 5:
        if (quantityAdultPicnic != 0) {
          setQuantityAdultPicnic(quantityAdultPicnic - 1);
        }
        break;

      case 6:
        if (quantityChildPicnic != 0) {
          setQuantityChildPicnic(quantityChildPicnic - 1);
        }
        break;

      case 7:
        if (quantityForeignAdultPicnic != 0) {
          setQuantityForeignAdultPicnic(quantityForeignAdultPicnic - 1);
        }
        break;

      case 8:
        if (quantityForeignChildPicnic != 0) {
          setQuantityForeignChildPicnic(quantityForeignChildPicnic - 1);
        }
        break;
    }
  };

  const checkTickets = (e) => {
    if (
      quantityAdultPicnic != 0 ||
      quantityChildPicnic != 0 ||
      quantityForeignAdultPicnic != 0 ||
      quantityForeignChildPicnic != 0 ||
      quantityAdultCamping != 0 ||
      quantityChildCamping != 0 ||
      quantityForeignAdultCamping != 0 ||
      quantityForeignChildCamping != 0
    ) {
      console.log("Success");
    } else {
      alert("To proceed, please buy at least one ticket");
    }
  };

  return (
    <div>
      <h2 className="pt-8 pb-4 pl-2">Camping</h2>
      <Table colums={columns}>
        <TableItem
          key={0}
          number={0}
          data={[
            names[0],
            prices[0],
            quantityAdultCamping,
            <Button
              text="+"
              type="add"
              onclickFunction={(e) => {
                handleClickAdd("", 1);
              }}
            />,
            <Button
              text="-"
              type="delete"
              onclickFunction={(e) => {
                handleClickSubstract("", 1);
              }}
            />,
          ]}
        />
        <TableItem
          key={1}
          number={1}
          data={[
            names[1],
            prices[1],
            quantityChildCamping,
            <Button
              text="+"
              type="add"
              onclickFunction={(e) => {
                handleClickAdd("", 2);
              }}
            />,
            <Button
              text="-"
              type="delete"
              onclickFunction={(e) => {
                handleClickSubstract("", 2);
              }}
            />,
          ]}
        />
        <TableItem
          key={2}
          number={2}
          data={[
            names[2],
            prices[2],
            quantityForeignAdultCamping,
            <Button
              text="+"
              type="add"
              onclickFunction={(e) => {
                handleClickAdd("", 3);
              }}
            />,
            <Button
              text="-"
              type="delete"
              onclickFunction={(e) => {
                handleClickSubstract("", 3);
              }}
            />,
          ]}
        />
        <TableItem
          key={3}
          number={3}
          data={[
            names[3],
            prices[3],
            quantityForeignChildCamping,
            <Button
              text="+"
              type="add"
              onclickFunction={(e) => {
                handleClickAdd("", 4);
              }}
            />,
            <Button
              text="-"
              type="delete"
              onclickFunction={(e) => {
                handleClickSubstract("", 4);
              }}
            />,
          ]}
        />
      </Table>
      <p className="pt-4 pl-2">
        * Note: Child between the ages 6 and 12. If they are older, choose an
        Adult ticket.
      </p>
      <h2 className="pt-8 pb-4 pl-2">Picnic</h2>
      <Table colums={columns}>
        <TableItem
          key={4}
          number={4}
          data={[
            names[0],
            prices[4],
            quantityAdultPicnic,
            <Button
              text="+"
              type="add"
              onclickFunction={(e) => {
                handleClickAdd("", 5);
              }}
            />,
            <Button
              text="-"
              type="delete"
              onclickFunction={(e) => {
                handleClickSubstract("", 5);
              }}
            />,
          ]}
        />
        <TableItem
          key={5}
          number={5}
          data={[
            names[1],
            prices[5],
            quantityChildPicnic,
            <Button
              text="+"
              type="add"
              onclickFunction={(e) => {
                handleClickAdd("", 6);
              }}
            />,
            <Button
              text="-"
              type="delete"
              onclickFunction={(e) => {
                handleClickSubstract("", 6);
              }}
            />,
          ]}
        />
        <TableItem
          key={6}
          number={6}
          data={[
            names[2],
            prices[6],
            quantityForeignAdultPicnic,
            <Button
              text="+"
              type="add"
              onclickFunction={(e) => {
                handleClickAdd("", 7);
              }}
            />,
            <Button
              text="-"
              type="delete"
              onclickFunction={(e) => {
                handleClickSubstract("", 7);
              }}
            />,
          ]}
        />
        <TableItem
          key={7}
          number={7}
          data={[
            names[3],
            prices[7],
            quantityForeignChildPicnic,
            <Button
              text="+"
              type="add"
              onclickFunction={(e) => {
                handleClickAdd("", 8);
              }}
            />,
            <Button
              text="-"
              type="delete"
              onclickFunction={(e) => {
                handleClickSubstract("", 8);
              }}
            />,
          ]}
        />
      </Table>
      <div className="w-1/3 mt-10 ml-[67%]">
        <Button
          text="Continue"
          onclickFunction={(e) => {
            checkTickets();
          }}
        />
      </div>
    </div>
  );
};

export default ReservationStep1;
