import { useState, useEffect } from "react";
import { getTicketPrices } from "../../Queries";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import InputButton from "../Buttons/InputButton";
import Button from "../Buttons/Button";

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
  const [childPicnicPrice, setchildPicnicPrice] = useState(0);
  const [foreignAdultPicnicPrice, setforeignAdultPicnicPrice] = useState(0);
  const [foreignChildPicnicPrice, setforeignChildPicnicPrice] = useState(0);
  const [adultCampingPrice, setAdultCampingPrice] = useState(0);
  const [childCampingPrice, setChildCampingPrice] = useState(0);
  const [foreignAdultCampingPrice, setForeignAdultCampingPrice] = useState(0);
  const [foreignChildCampingPrice, setForeignChildCampingPrice] = useState(0);

  const fecthTicketPrices = async () => {
    try {
      const result = await getTicketPrices();
      filterTickets(result);
    } catch (exception) {
      console.error(exception);
    }
  };

  const filterTickets = (result) => {
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

  const readyToLoad = () => {
    return picnicTickets.length > 0 && campingTickets.length > 0;
  };

  useEffect(() => {
    fecthTicketPrices();
  }, []);

  const modifyPrice = () => {
    console.log("Sirve??");
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
        setModifyButtons((prevButtons) => {
          const updatedButtons = [...prevButtons];
          updatedButtons[index] = "Modify";
          return updatedButtons;
        });
      }
    } else {
      const offSet = index + 4;
      console.log("En camping index + 4 es: " + offSet);
      if (modifyButtons[offSet] === "Modify") {
        setModifyButtons((prevButtons) => {
          const updatedButtons = [...prevButtons];
          updatedButtons[offSet] = "Save";
          return updatedButtons;
        });
      } else {
        setModifyButtons((prevButtons) => {
          const updatedButtons = [...prevButtons];
          updatedButtons[offSet] = "Modify";
          return updatedButtons;
        });
      }
    }
  };
  const enableInput = (index, type) => {
    type === "Picnic"
      ? setDisabledPicnicButtons((prevButtons) =>
          prevButtons.map((button, i) => (i === index ? !button : button))
        )
      : setDisabledCampingButtons((prevButtons) =>
          prevButtons.map((button, i) => (i === index ? !button : button))
        );
  };

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
                    placeholderText={picnicTicket.Price.toLocaleString("en-us")}
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
                    placeholderText={campingTicket.Price.toLocaleString(
                      "en-us"
                    )}
                    disabled={disabledCampingButtons[index]}
                    type={["Camping", index]}
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
