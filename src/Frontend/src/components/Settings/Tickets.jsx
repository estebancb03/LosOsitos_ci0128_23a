import { useState, useEffect } from "react";
import { getTicketPrices } from "../../Queries";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import InputButton from "../Buttons/InputButton";
import Button from "../Buttons/Button";
import useUpdateTicketPrice from "../../hooks/useUpdateTicketPrice";
import { BsPencil } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";

const Tickets = () => {
  const [picnicTickets, setPicnicTickets] = useState([]);
  const [campingTickets, setCampingTickets] = useState([]);
  const columnNames = ["Ticket", "Currency", "Price", "Action"];
  const rowNamesPicnic = [
    "Domestic Child",
    "Foreign Child",
    "Domestic Adult",
    "Foreign Adult",
    "Foreign Elder",
  ];

  const rowNamesCamping = [
    "Domestic Child",
    "Foreign Child",
    "Domestic Adult",
    "Foreign Adult",
    "Domestic Elder",
    "Foreign Elder",
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
    "Modify",
    "Modify",
    "Modify",
  ]);

  <BsPencil />;
  const [disablePicnicButtons, setDisabledPicnicButtons] = useState([
    true,
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
    true,
    true,
  ]);
  const [adultPicnicPrice, setAdultPicnicPrice] = useState(0);
  const [childPicnicPrice, setChildPicnicPrice] = useState(0);
  const [foreignAdultPicnicPrice, setForeignAdultPicnicPrice] = useState(0);
  const [foreignChildPicnicPrice, setForeignChildPicnicPrice] = useState(0);
  const [foreignElderPicnicPrice, setForeignElderPicnicPrice] = useState(0);

  const [adultCampingPrice, setAdultCampingPrice] = useState(0);
  const [childCampingPrice, setChildCampingPrice] = useState(0);
  const [foreignAdultCampingPrice, setForeignAdultCampingPrice] = useState(0);
  const [foreignChildCampingPrice, setForeignChildCampingPrice] = useState(0);
  const [elderCampingPrice, setElderCampingPrice] = useState(0);
  const [foreignElderCampingPrice, setForeignElderCampingPrice] = useState(0);

  const [isValidData, setIsValidData] = useState([
    true,
    true,
    true,
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
        return (
          ticket.Reservation_Type === 0 &&
          ticket.Special !== 1 &&
          ticket.Price != 0
        );
      })
    );
    setCampingTickets(
      result.filter((ticket) => {
        return (
          ticket.Reservation_Type === 1 &&
          ticket.Special !== 1 &&
          ticket.Price != 0
        );
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
        regex.test(foreignElderPicnicPrice)
          ? setForeignElderPicnicPrice(parseFloat(foreignElderPicnicPrice))
          : (successfulConversion = false);

      case 5:
        regex.test(childCampingPrice)
          ? setChildCampingPrice(parseFloat(childCampingPrice))
          : (successfulConversion = false);

        break;

      case 6:
        regex.test(foreignChildCampingPrice)
          ? setForeignChildCampingPrice(parseFloat(foreignChildCampingPrice))
          : (successfulConversion = false);

        break;

      case 7:
        regex.test(adultCampingPrice)
          ? setAdultCampingPrice(parseFloat(adultCampingPrice))
          : (successfulConversion = false);

        break;

      case 8:
        regex.test(foreignAdultCampingPrice)
          ? setForeignAdultCampingPrice(parseFloat(foreignAdultCampingPrice))
          : (successfulConversion = false);

        break;
      case 9:
        regex.test(elderCampingPrice)
          ? setElderCampingPrice(parseFloat(elderCampingPrice))
          : (successfulConversion = false);
        break;

      case 10:
        regex.test(foreignElderCampingPrice)
          ? setForeignElderCampingPrice(parseFloat(foreignElderCampingPrice))
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
        if (foreignElderPicnicPrice === 0) {
          setForeignElderPicnicPrice(picnicTickets[4].Price);
        }
        break;

      case 5:
        if (childCampingPrice === 0) {
          setChildCampingPrice(campingTickets[0].Price);
        }
        break;

      case 6:
        if (foreignChildPicnicPrice === 0) {
          setForeignChildCampingPrice(campingTickets[1].Price);
        }
        break;

      case 7:
        if (adultCampingPrice === 0) {
          setAdultCampingPrice(campingTickets[2].Price);
        }
        break;

      case 8:
        if (foreignAdultCampingPrice === 0) {
          setForeignAdultCampingPrice(campingTickets[3].Price);
        }
        break;

      case 9:
        if (elderCampingPrice === 0) {
          setElderCampingPrice(campingTickets[4].Price);
        }
        break;

      case 10:
        if (foreignElderCampingPrice === 0) {
          setForeignElderCampingPrice(campingTickets[5].Price);
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
        setForeignElderPicnicPrice(value);
        break;

      case 5:
        setChildCampingPrice(value);
        break;
      case 6:
        setForeignChildCampingPrice(value);
        break;
      case 7:
        setAdultCampingPrice(value);
        break;
      case 8:
        setForeignAdultCampingPrice(value);
        break;
      case 9:
        setElderCampingPrice(value);
        break;
      case 10:
        setForeignElderCampingPrice(value);
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
        case 4:
          price = foreignElderPicnicPrice;
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
        case 4:
          price = elderCampingPrice;
          break;
        case 5:
          price = foreignElderCampingPrice;
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
            "Values for ticket prices can only be positive numbers." +
              "\nIf you entered a number with commas, remove them." +
              "\nChanges will not be applied"
          );
        }
      }
    } else {
      const offSet = 5;
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
            "Values for ticket prices can only be positive numbers." +
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
      const offset = 5;
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
        return foreignElderPicnicPrice;
      case 5:
        return childCampingPrice;
      case 6:
        return foreignChildCampingPrice;
      case 7:
        return adultCampingPrice;
      case 8:
        return foreignAdultCampingPrice;
      case 9:
        return elderCampingPrice;
      case 10:
        return foreignElderCampingPrice;
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
  }, [foreignElderPicnicPrice]);

  useEffect(() => {
    modifyHandleClick(5);
  }, [childCampingPrice]);

  useEffect(() => {
    modifyHandleClick(6);
  }, [foreignChildCampingPrice]);

  useEffect(() => {
    modifyHandleClick(7);
  }, [adultCampingPrice]);

  useEffect(() => {
    modifyHandleClick(8);
  }, [foreignAdultCampingPrice]);

  useEffect(() => {
    modifyHandleClick(9);
  }, [elderCampingPrice]);

  useEffect(() => {
    modifyHandleClick(10);
  }, [foreignElderCampingPrice]);

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
                  rowNamesPicnic[index],
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
                  rowNamesCamping[index],
                  campingTicket.Currency,
                  <InputButton
                    placeholderText={returnState(index + 5)}
                    disabled={disabledCampingButtons[index]}
                    type={["Camping", index + 5]}
                    onChangeFunction={modifyPrice}
                  />,
                  <Button
                    text={modifyButtons[index + 5]}
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
