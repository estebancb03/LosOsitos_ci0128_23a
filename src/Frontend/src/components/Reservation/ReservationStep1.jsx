import { useState, useEffect } from "react";
import { getTicketPrices } from "../../Queries";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import Button from "../Button";

const ReservationStep1 = () => {
  const [ticketsPrices, setTicketsPrices] = useState([]);
  const [prices, setPrices] = useState({
    PicnicNationalAdultCRC: null,
    PicnicNationalChildCRC: null,
    PicnicInternationalAdultUSD: null,
    PicnicInternationalChildUSD: null,
    CampingNationalAdultCRC: null,
    CampingNationalChildCRC: null,
    CampingInternationalAdultUSD: null,
    CampingInternationalChildUSD: null,
  });
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

  const waitForTicketPrices = async () => {
    try {
      const result = await getTicketPrices();
      setTicketsPrices(result);
    } catch (exception) {
      console.error(exception);
    }
  };

  const columnsNamesNames = ["Type", "Currency", "Price", "Quantity", "", ""];
  const rowsNames = [
    "Domestic Adult",
    "Domestic Child*",
    "Foreign Adult",
    "Foreign Child*",
  ];

  const filterPrices = () => {
    const newPrices = { ...ticketsPrices };
    // Filter prices for Picnic

    // Filter Picnic ticket prices for national adults
    let filteredArray = ticketsPrices.filter(
      (ticketPrice) =>
        ticketPrice.Age_Range == 1 &&
        ticketPrice.Currency == "CRC" &&
        ticketPrice.Reservation_Type == 0
    );
    newPrices.PicnicNationalAdultCRC = filteredArray;

    // Filter Picnic ticket prices for national children
    filteredArray = ticketsPrices.filter(
      (ticketPrice) =>
        ticketPrice.Age_Range == 0 &&
        ticketPrice.Currency == "CRC" &&
        ticketPrice.Reservation_Type == 0
    );
    newPrices.PicnicNationalChildCRC = filteredArray;

    // Filter Picnic ticket prices for international adults
    filteredArray = ticketsPrices.filter(
      (ticketPrice) =>
        ticketPrice.Age_Range == 1 &&
        ticketPrice.Currency == "USD" &&
        ticketPrice.Reservation_Type == 0
    );
    newPrices.PicnicInternationalAdultUSD = filteredArray;

    // Filter Picnic ticket prices for international children
    filteredArray = ticketsPrices.filter(
      (ticketPrice) =>
        ticketPrice.Age_Range == 0 &&
        ticketPrice.Currency == "USD" &&
        ticketPrice.Reservation_Type == 0
    );
    newPrices.PicnicInternationalChildUSD = filteredArray;

    // Filter prices for Camping

    // Filter Camping ticket prices for national adults
    filteredArray = ticketsPrices.filter(
      (ticketPrice) =>
        ticketPrice.Age_Range == 1 &&
        ticketPrice.Currency == "CRC" &&
        ticketPrice.Reservation_Type == 1
    );
    newPrices.CampingNationalAdultCRC = filteredArray;

    // Filter Camping ticket prices for national children
    filteredArray = ticketsPrices.filter(
      (ticketPrice) =>
        ticketPrice.Age_Range == 0 &&
        ticketPrice.Currency == "CRC" &&
        ticketPrice.Reservation_Type == 1
    );
    newPrices.CampingNationalChildCRC = filteredArray;

    // Filter Camping ticket prices for international adults
    filteredArray = ticketsPrices.filter(
      (ticketPrice) =>
        ticketPrice.Age_Range == 1 &&
        ticketPrice.Currency == "USD" &&
        ticketPrice.Reservation_Type == 1
    );
    newPrices.CampingInternationalAdultUSD = filteredArray;

    // Filter Camping ticket prices for international children
    filteredArray = ticketsPrices.filter(
      (ticketPrice) =>
        ticketPrice.Age_Range == 0 &&
        ticketPrice.Currency == "USD" &&
        ticketPrice.Reservation_Type == 1
    );
    newPrices.CampingInternationalChildUSD = filteredArray;
    setPrices(newPrices);
  };

  const handleClickAdd = (e, quantityType) => {
    console.log(quantityType);
    switch (quantityType) {
      case 1:
        if (quantityAdultCamping == 10) {
          alert("You can only buy 10 tickets per person type.");
        } else {
          setQuantityAdultCamping(quantityAdultCamping + 1);
        }
        console.log(quantityAdultCamping);
        break;

      case 2:
        if (quantityChildCamping == 10) {
          alert("You can only buy 10 tickets per person type.");
        } else {
          setQuantityChildCamping(quantityChildCamping + 1);
        }
        break;

      case 3:
        if (quantityForeignAdultCamping == 10) {
          alert("You can only buy 10 tickets per person type.");
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
          alert("You can only buy 10 tickets per person type.");
        } else {
          setQuantityAdultPicnic(quantityAdultPicnic + 1);
        }
        break;

      case 6:
        if (quantityChildPicnic == 10) {
          alert("You can only buy 10 tickets per person type.");
        } else {
          setQuantityChildPicnic(quantityChildPicnic + 1);
        }
        break;

      case 7:
        if (quantityForeignAdultPicnic == 10) {
          alert("You can only buy 10 tickets per person type.");
        } else {
          setQuantityForeignAdultPicnic(quantityForeignAdultPicnic + 1);
        }
        break;

      case 8:
        if (quantityForeignChildPicnic == 10) {
          alert("You can only buy 10 tickets per person type.");
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

  useEffect(() => {
    waitForTicketPrices();
  }, []);

  useEffect(() => {
    if (ticketsPrices) {
      filterPrices();
    }
  }, [ticketsPrices]);

  // Verify that the arrays aren't empty before loading the page
  const readyToLoad = () => {
    return (
      ticketsPrices &&
      prices.PicnicNationalAdultCRC.length > 0 &&
      prices.PicnicNationalChildCRC.length > 0 &&
      prices.PicnicInternationalAdultUSD.length > 0 &&
      prices.PicnicInternationalChildUSD.length > 0 &&
      prices.CampingNationalAdultCRC.length > 0 &&
      prices.CampingNationalChildCRC.length > 0 &&
      prices.CampingInternationalAdultUSD.length > 0 &&
      prices.CampingInternationalChildUSD.length > 0
    );
  };

  if (
    !ticketsPrices ||
    !prices.PicnicNationalAdultCRC ||
    !prices.PicnicNationalChildCRC ||
    !prices.PicnicInternationalAdultUSD ||
    !prices.PicnicInternationalChildUSD ||
    !prices.CampingNationalAdultCRC ||
    !prices.CampingNationalChildCRC ||
    !prices.CampingInternationalAdultUSD ||
    !prices.CampingInternationalChildUSD
  ) {
    return <div>Loading....</div>;
  }

  return (
    <>
      {readyToLoad() && (
        <div>
          <h2 className="pt-8 pb-4 pl-2">Camping</h2>
          <Table colums={columnsNamesNames}>
            <TableItem
              key={0}
              number={0}
              data={[
                rowsNames[0],
                prices.CampingNationalAdultCRC[0].Currency,
                prices.CampingNationalAdultCRC[0].Price,
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
                rowsNames[1],
                prices.CampingNationalChildCRC[0].Currency,
                prices.CampingNationalChildCRC[0].Price,
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
                rowsNames[2],
                prices.CampingInternationalAdultUSD[0].Currency,
                prices.CampingInternationalAdultUSD[0].Price,
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
                rowsNames[3],
                prices.CampingInternationalChildUSD[0].Currency,
                prices.CampingInternationalChildUSD[0].Price,
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
            * Note: Child between the ages 6 and 12. If they are older, choose
            an Adult ticket.
          </p>
          <h2 className="pt-8 pb-4 pl-2">Picnic</h2>
          <Table colums={columnsNamesNames}>
            <TableItem
              key={4}
              number={4}
              data={[
                rowsNames[0],
                prices.PicnicNationalAdultCRC[0].Currency,
                prices.PicnicNationalAdultCRC[0].Price,
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
                rowsNames[1],
                prices.PicnicNationalChildCRC[0].Currency,
                prices.PicnicNationalChildCRC[0].Price,
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
                rowsNames[2],
                prices.PicnicInternationalAdultUSD[0].Currency,
                prices.PicnicInternationalAdultUSD[0].Price,
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
                rowsNames[3],
                prices.PicnicInternationalChildUSD[0].Currency,
                prices.PicnicInternationalChildUSD[0].Price,
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
      )}
    </>
  );
};

export default ReservationStep1;