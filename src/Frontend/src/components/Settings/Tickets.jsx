import { useState, useEffect } from "react";
import { getTicketPrices } from "../../Queries";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import InputButton from "../Buttons/InputButton";
import Button from "../Buttons/Button";
import useUpdateTicketPrice from "../../hooks/useUpdateTicketPrice";

const Tickets = () => {
  const [picnicTickets, setPicnicTickets] = useState([]);
  const [campingTickets, setCampingTickets] = useState([]);
  const columnNames = ["Ticket", "Currency", "Price", "Action"];
  const rowNames = [
    "Domestic Child",
    "Foreign Child",
    "Domestic Adult",
    "Foreign Adult",
  ];
  const [modifyButtons, setModifyButtons] = useState([
    "Modify",
    "Modify",
    "Modify",
    "Modify",
    "Modify",
    "Modify",
    "Modify",
    "Modify",
  ]);
  const [disablePicnicButtons, setDisabledPicnicButtons] = useState([
    true,
    true,
    true,
    true,
  ]);
  const [disabledCampingButtons, setDisabledCampingButtons] = useState([
    true,
    true,
    true,
    true,
  ]);
  const [adultPicnicPrice, setAdultPicnicPrice] = useState(0);
  const [childPicnicPrice, setChildPicnicPrice] = useState(0);
  const [foreignAdultPicnicPrice, setForeignAdultPicnicPrice] = useState(0);
  const [foreignChildPicnicPrice, setForeignChildPicnicPrice] = useState(0);
  const [adultCampingPrice, setAdultCampingPrice] = useState(0);
  const [childCampingPrice, setChildCampingPrice] = useState(0);
  const [foreignAdultCampingPrice, setForeignAdultCampingPrice] = useState(0);
  const [foreignChildCampingPrice, setForeignChildCampingPrice] = useState(0);
  const [isValidData, setIsValidData] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const fetchTicketPrices = async () => {
    try {
      const result = await getTicketPrices();
      await filterTickets(result);
    } catch (exception) {
      console.error(exception);
    }
  };

  const filterTickets = async (result) => {
    setPicnicTickets(
      result.filter((ticket) => {
        return ticket.Reservation_Type === 0 && ticket.Special !== 1;
      })
    );
    setCampingTickets(
      result.filter((ticket) => {
        return ticket.Reservation_Type === 1 && ticket.Special !== 1;
      })
    );
  };

  const checkValuesEntered = (index) => {
    // Regex that checks that user can only type positive numbers with decimals.
    const regex = /^(?!.*[,])\d+(\.\d+)?$/;
    let successfulConversion = true;
    switch (index) {
      case 0:
        regex.test(childPicnicPrice)
          ? setChildPicnicPrice(parseFloat(childPicnicPrice))
          : (successfulConversion = false);

        break;

      case 1:
        regex.test(foreignChildPicnicPrice)
          ? setForeignChildPicnicPrice(parseFloat(foreignChildPicnicPrice))
          : (successfulConversion = false);

        break;

      case 2:
        regex.test(adultPicnicPrice)
          ? setAdultPicnicPrice(parseFloat(adultPicnicPrice))
          : (successfulConversion = false);

        break;

      case 3:
        regex.test(foreignAdultPicnicPrice)
          ? setForeignAdultPicnicPrice(parseFloat(foreignAdultPicnicPrice))
          : (successfulConversion = false);

        break;

      case 4:
        regex.test(childCampingPrice)
          ? setChildCampingPrice(parseFloat(childCampingPrice))
          : (successfulConversion = false);

        break;

      case 5:
        regex.test(foreignChildCampingPrice)
          ? setForeignChildCampingPrice(parseFloat(foreignChildCampingPrice))
          : (successfulConversion = false);

        break;

      case 6:
        regex.test(adultCampingPrice)
          ? setAdultCampingPrice(parseFloat(adultCampingPrice))
          : (successfulConversion = false);

        break;

      case 7:
        regex.test(foreignAdultCampingPrice)
          ? setForeignAdultCampingPrice(parseFloat(foreignAdultCampingPrice))
          : (successfulConversion = false);

        break;
    }
    return successfulConversion;
  };

  const assignValuesToStates = (index) => {
    switch (index) {
      case 0:
        if (childPicnicPrice === 0) {
          setChildPicnicPrice(picnicTickets[0].Price);
        }
        break;

      case 1:
        if (foreignChildPicnicPrice === 0) {
          setForeignChildPicnicPrice(picnicTickets[1].Price);
        }
        break;

      case 2:
        if (adultPicnicPrice === 0) {
          setAdultPicnicPrice(picnicTickets[2].Price);
        }
        break;

      case 3:
        if (foreignAdultPicnicPrice === 0) {
          setForeignAdultPicnicPrice(picnicTickets[3].Price);
        }
        break;

      case 4:
        if (childCampingPrice === 0) {
          setChildCampingPrice(campingTickets[0].Price);
        }
        break;

      case 5:
        if (foreignChildPicnicPrice === 0) {
          setForeignChildCampingPrice(campingTickets[1].Price);
        }
        break;

      case 6:
        if (adultCampingPrice === 0) {
          setAdultCampingPrice(campingTickets[2].Price);
        }
        break;

      case 7:
        if (foreignAdultCampingPrice === 0) {
          setForeignAdultCampingPrice(campingTickets[3].Price);
        }
        break;
    }
  };

  const modifyHandleClick = (stateModified) => {
    if (modifyButtons[stateModified] === "Save") {
      if (checkValuesEntered(stateModified)) {
        setIsValidData((prevValidData) => {
          const updatedData = [...prevValidData];
          updatedData[stateModified] = true;
          return updatedData;
        });
      } else {
        setIsValidData((prevValidData) => {
          const updatedData = [...prevValidData];
          updatedData[stateModified] = false;
          return updatedData;
        });
      }
    }
  };

  const modifyPrice = (type, value) => {
    const index = type[1];
    switch (index) {
      case 0:
        setChildPicnicPrice(value);
        break;
      case 1:
        setForeignChildPicnicPrice(value);
        break;
      case 2:
        setAdultPicnicPrice(value);
        break;
      case 3:
        setForeignAdultPicnicPrice(value);
        break;
      case 4:
        setChildCampingPrice(value);
        break;
      case 5:
        setForeignChildCampingPrice(value);
        break;
      case 6:
        setAdultCampingPrice(value);
        break;
      case 7:
        setForeignAdultCampingPrice(value);
        break;
    }
  };

  const sendDataToDatabase = (index, type) => {
    let price = 0;
    if (type === "Picnic") {
      switch (index) {
        case 0:
          price = childPicnicPrice;
          break;
        case 1:
          price = foreignChildPicnicPrice;
          break;
        case 2:
          price = adultPicnicPrice;
          break;
        case 3:
          price = foreignAdultPicnicPrice;
          break;
      }
      useUpdateTicketPrice(
        picnicTickets[index].Age_Range,
        picnicTickets[index].Demographic_Group,
        picnicTickets[index].Reservation_Type,
        price
      );
    } else {
      switch (index) {
        case 0:
          price = childCampingPrice;
          break;
        case 1:
          price = foreignChildCampingPrice;
          break;
        case 2:
          price = adultCampingPrice;
          break;
        case 3:
          price = foreignAdultCampingPrice;
          break;
      }
      useUpdateTicketPrice(
        campingTickets[index].Age_Range,
        campingTickets[index].Demographic_Group,
        campingTickets[index].Reservation_Type,
        price
      );
    }
  };

  const changeButtonAction = (index, type) => {
    if (type === "Picnic") {
      if (modifyButtons[index] === "Modify") {
        setModifyButtons((prevButtons) => {
          const updatedButtons = [...prevButtons];
          updatedButtons[index] = "Save";
          return updatedButtons;
        });
      } else {
        if (isValidData[index]) {
          setModifyButtons((prevButtons) => {
            const updatedButtons = [...prevButtons];
            updatedButtons[index] = "Modify";
            return updatedButtons;
          });
          sendDataToDatabase(index, type);
        } else {
          alert(
            "Values from the capacity can only be positive numbers." +
              "\nIf you entered a number with commas, remove them." +
              "\nChanges will not be applied"
          );
        }
      }
    } else {
      const offSet = 4;
      if (modifyButtons[index + offSet] === "Modify") {
        setModifyButtons((prevButtons) => {
          const updatedButtons = [...prevButtons];
          updatedButtons[index + offSet] = "Save";
          return updatedButtons;
        });
      } else {
        if (isValidData[index + offSet]) {
          setModifyButtons((prevButtons) => {
            const updatedButtons = [...prevButtons];
            updatedButtons[index + offSet] = "Modify";
            return updatedButtons;
          });
          sendDataToDatabase(index, type);
        } else {
          alert(
            "Values from the capacity can only be positive numbers." +
              "\nIf you entered a number with commas, remove them." +
              "\nChanges will not be applied"
          );
        }
      }
    }
  };

  const enableInput = (index, type) => {
    if (type === "Picnic") {
      if (isValidData[index]) {
        setDisabledPicnicButtons((prevButtons) =>
          prevButtons.map((button, i) => (i === index ? !button : button))
        );
      }
    } else {
      const offset = 4;
      if (isValidData[index + offset]) {
        setDisabledCampingButtons((prevButtons) =>
          prevButtons.map((button, i) => (i === index ? !button : button))
        );
      }
    }
  };

  const returnState = (index) => {
    assignValuesToStates(index);
    let price = 0;
    switch (index) {
      case 0:
        return childPicnicPrice;
      case 1:
        return foreignChildPicnicPrice;
      case 2:
        return adultPicnicPrice;
      case 3:
        return foreignAdultPicnicPrice;
      case 4:
        return childCampingPrice;
      case 5:
        return foreignChildCampingPrice;
      case 6:
        return adultCampingPrice;
      case 7:
        return foreignAdultCampingPrice;
    }
    return price;
  };

  const readyToLoad = () => {
    return picnicTickets.length > 0 && campingTickets.length > 0;
  };

  useEffect(() => {
    fetchTicketPrices();
  }, []);

  useEffect(() => {
    modifyHandleClick(0);
  }, [childPicnicPrice]);

  useEffect(() => {
    modifyHandleClick(1);
  }, [foreignChildPicnicPrice]);

  useEffect(() => {
    modifyHandleClick(2);
  }, [adultPicnicPrice]);

  useEffect(() => {
    modifyHandleClick(3);
  }, [foreignAdultPicnicPrice]);

  useEffect(() => {
    modifyHandleClick(4);
  }, [childCampingPrice]);

  useEffect(() => {
    modifyHandleClick(5);
  }, [foreignChildCampingPrice]);

  useEffect(() => {
    modifyHandleClick(6);
  }, [adultCampingPrice]);

  useEffect(() => {
    modifyHandleClick(7);
  }, [foreignAdultCampingPrice]);

  return (
    <>
      {readyToLoad() && (
        <div>
          <div className=" mt-5 ml-1 text-2xl sm:text-2xl">Picnic</div>
          <Table colums={columnNames}>
            {picnicTickets.map((picnicTicket, index) => (
              <TableItem
                key={index}
                number={index}
                data={[
                  rowNames[index],
                  picnicTicket.Currency,
                  <InputButton
                    placeholderText={returnState(index)}
                    disabled={disablePicnicButtons[index]}
                    type={["Picnic", index]}
                    onChangeFunction={modifyPrice}
                  />,
                  <Button
                    text={modifyButtons[index]}
                    onclickFunction={() => {
                      changeButtonAction(index, "Picnic");
                      enableInput(index, "Picnic");
                    }}
                  />,
                ]}
              />
            ))}
          </Table>
          <div className=" mt-6 ml-1 text-2xl sm:text-2xl">Camping</div>
          <Table colums={columnNames}>
            {campingTickets.map((campingTicket, index) => (
              <TableItem
                key={index}
                number={index}
                data={[
                  rowNames[index],
                  campingTicket.Currency,
                  <InputButton
                    placeholderText={returnState(index + 4)}
                    disabled={disabledCampingButtons[index]}
                    type={["Camping", index + 4]}
                    onChangeFunction={modifyPrice}
                  />,
                  <Button
                    text={modifyButtons[index + 4]}
                    onclickFunction={() => {
                      changeButtonAction(index, "Camping");
                      enableInput(index, "Camping");
                    }}
                  />,
                ]}
              />
            ))}
          </Table>
        </div>
      )}
    </>
  );
};

export default Tickets;
