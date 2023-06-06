import { useState, useEffect } from "react";
import { getTicketPrices, getRemainingCapacity } from "../../Queries";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import Button from "../Buttons/Button";
import { getDateRange } from "../../helpers/formatDate";

const ReservationStep2 = ({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) => {
  let remainingCapacityLocal = [];
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
  const [remainingCapacity, setRemainingCapacity] = useState([]);

  const waitForTicketPrices = async () => {
    try {
      const result = await getTicketPrices();
      setTicketsPrices(result);
    } catch (exception) {
      console.error(exception);
    }
  };

  const waitForRemainingCapacity = async (date) => {
    try {
      const result = await getRemainingCapacity(
        date,
        reservationData.Reservation_Type
      );
      const temp = result.map((capacityObject) => {
        if (capacityObject.Reservation_Method == 0) {
          return capacityObject;
        }
      });
      remainingCapacityLocal.push(temp[0]);
    } catch (exception) {
      console.error(exception);
    }
  };

  const columnsNamesNames = [
    "Type",
    "Currency",
    "Price",
    "Quantity",
    "Action",
    "Action",
  ];
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

  const checkCapacity = () => {
    const desiredQuantity =
      reservationData.Reservation_Type == 1
        ? quantityAdultCamping +
          quantityChildCamping +
          quantityForeignAdultCamping +
          quantityForeignChildCamping
        : quantityAdultPicnic +
          quantityChildPicnic +
          quantityForeignAdultPicnic +
          quantityForeignChildPicnic;

    let overflow = remainingCapacity.map((capacityObject) => {
      if (
        capacityObject.Reservation_Method == 0 &&
        desiredQuantity >= capacityObject.Remaining_Capacity
      ) {
        return true;
      }
      return false;
    });

    const canAdd = overflow.length > 0 ? !overflow.includes(true) : true;
    return canAdd;
  };

  const handleClickAdd = (e, quantityType) => {
    const canAdd = checkCapacity();
    if (canAdd) {
      switch (quantityType) {
        case 1:
          if (quantityAdultCamping == 10) {
            alert("You can only buy 10 tickets per person type.");
          } else {
            setQuantityAdultCamping(quantityAdultCamping + 1);
          }
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
    } else {
      alert("The park's capacity is being exceeded.");
    }
  };

  const handleClickSubstract = (e, quantityType) => {
    switch (quantityType) {
      case 1:
        if (quantityAdultCamping != 0) {
          setQuantityAdultCamping(quantityAdultCamping - 1);
        }
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
      return true;
    } else {
      return false;
    }
  };

  const updateReservationData = () => {
    if (checkTickets()) {
      const newReservationData = { ...reservationData };
      const newWindows = { ...windows };
      newWindows.Step2 = false;
      newWindows.Step3 = true;
      let tickets = [];
      if (reservationData.Reservation_Type === 0) {
        if (quantityAdultPicnic !== 0) {
          tickets.push({
            Age_Range: 1,
            Demographic_Group: 0,
            Reservation_Type: reservationData.Reservation_Type,
            Amount: quantityAdultPicnic,
            Price: prices.PicnicNationalAdultCRC[0].Price,
          });
        }
        if (quantityChildPicnic !== 0) {
          tickets.push({
            Age_Range: 0,
            Demographic_Group: 0,
            Reservation_Type: reservationData.Reservation_Type,
            Amount: quantityChildPicnic,
            Price: prices.PicnicNationalChildCRC[0].Price,
          });
        }
        if (quantityForeignAdultPicnic !== 0) {
          tickets.push({
            Age_Range: 1,
            Demographic_Group: 1,
            Reservation_Type: reservationData.Reservation_Type,
            Amount: quantityForeignAdultPicnic,
            Price: prices.PicnicInternationalAdultUSD[0].Price,
          });
        }
        if (quantityForeignChildPicnic !== 0) {
          tickets.push({
            Age_Range: 0,
            Demographic_Group: 1,
            Reservation_Type: reservationData.Reservation_Type,
            Amount: quantityForeignChildPicnic,
            Price: prices.PicnicInternationalChildUSD[0].Price,
          });
        }
      } else {
        if (quantityAdultCamping !== 0) {
          tickets.push({
            Age_Range: 1,
            Demographic_Group: 0,
            Reservation_Type: reservationData.Reservation_Type,
            Amount: quantityAdultCamping,
            Price: prices.CampingNationalAdultCRC[0].Price,
          });
        }
        if (quantityChildCamping !== 0) {
          tickets.push({
            Age_Range: 0,
            Demographic_Group: 0,
            Reservation_Type: reservationData.Reservation_Type,
            Amount: quantityChildCamping,
            Price: prices.CampingNationalChildCRC[0].Price,
          });
        }
        if (quantityForeignAdultCamping !== 0) {
          tickets.push({
            Age_Range: 1,
            Demographic_Group: 1,
            Reservation_Type: reservationData.Reservation_Type,
            Amount: quantityForeignAdultCamping,
            Price: prices.CampingInternationalAdultUSD[0].Price,
          });
        }
        if (quantityForeignChildCamping !== 0) {
          tickets.push({
            Age_Range: 0,
            Demographic_Group: 1,
            Reservation_Type: reservationData.Reservation_Type,
            Amount: quantityForeignChildCamping,
            Price: prices.CampingInternationalChildUSD[0].Price,
          });
        }
      }
      newReservationData.Tickets = tickets;
      setReservationData(newReservationData);
      setWindows(newWindows);
    } else {
      alert("To proceed, please buy at least one ticket");
    }
  };

  useEffect(() => {
    waitForTicketPrices();
  }, []);

  useEffect(() => {
    remainingCapacityLocal = [];
    if (reservationData.Reservation_Type == 0) {
      waitForRemainingCapacity(reservationData.Reservation_Date);
    } else if (reservationData.Reservation_Type == 1) {
      const dates = getDateRange(
        reservationData.Start_Date,
        reservationData.End_Date
      );
      dates.map((date) => {
        waitForRemainingCapacity(date);
      });
    }
    setRemainingCapacity(remainingCapacityLocal);
  }, []);

  useEffect(() => {
    console.log(remainingCapacity);
  }, [remainingCapacity]);

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
      {windows.Step2 && readyToLoad() && (
        <div>
          {reservationData.Reservation_Type === 0 ? (
            <div>
              <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">Picnic</h2>
              <Table colums={columnsNamesNames}>
                <TableItem
                  key={4}
                  number={4}
                  data={[
                    rowsNames[0],
                    prices.PicnicNationalAdultCRC[0].Currency,
                    prices.PicnicNationalAdultCRC[0].Price.toLocaleString(
                      "en-US"
                    ),
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
                    prices.PicnicNationalChildCRC[0].Price.toLocaleString(
                      "en-US"
                    ),
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
                    prices.PicnicInternationalAdultUSD[0].Price.toLocaleString(
                      "en-US"
                    ),
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
                    prices.PicnicInternationalChildUSD[0].Price.toLocaleString(
                      "en-US"
                    ),
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
            </div>
          ) : (
            <div>
              <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">Camping</h2>
              <Table colums={columnsNamesNames}>
                <TableItem
                  key={0}
                  number={0}
                  data={[
                    rowsNames[0],
                    prices.CampingNationalAdultCRC[0].Currency,
                    prices.CampingNationalAdultCRC[0].Price.toLocaleString(
                      "en-US"
                    ),
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
                    prices.CampingNationalChildCRC[0].Price.toLocaleString(
                      "en-US"
                    ),
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
                    prices.CampingInternationalAdultUSD[0].Price.toLocaleString(
                      "en-US"
                    ),
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
                    prices.CampingInternationalChildUSD[0].Price.toLocaleString(
                      "en-US"
                    ),
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
            </div>
          )}
          <p className="pt-4 pl-2">
            * Note: Children between the ages of 6 and 12. If they are older,
            choose an Adult ticket.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4">
            <Button
              text="Back"
              onclickFunction={(e) => {
                const newWindows = { ...windows };
                newWindows.Step1 = true;
                newWindows.Step2 = false;
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
      )}
    </>
  );
};

export default ReservationStep2;
