import { useState, useEffect } from "react";
import Table from "../Table/Table";
import TableItem from "../Table/TableItem";
import Button from "../Buttons/Button";
import useTicket from "../../hooks/useTicket";
import useValidations from "../../hooks/useValidations";

const ReservationStep2 = (props) => {
  const { windows, setWindows, reservationData, setReservationData } = props;
  const [tickets, setTickets] = useState({
    NC06: 0,
    NC712: 0,
    NA: 0,
    NSC: 0,
    FC06: 0,
    FC712: 0,
    FA: 0,
    FSC: 0
  });
  const { 
    ticketOptions, 
    ticketPrices, 
    extractTicketData, 
    addTicket, 
    deleteTicket,
    getTicketQuantity,
    getTicketCurrency,
    formatAllTickets
  } = useTicket();
  const { validateCapacity, validateTicketsAmount } = useValidations(reservationData);
  const colums = ["Type", "Price", "Quantity", "Action", "Action"];

  const backToStep1 = () => {
    const newWindows = { ...windows };
    newWindows.Step1 = true;
    newWindows.Step2 = false;
    setWindows(newWindows);
  };

  const goToStep3 = async () => {
    if (validateTicketsAmount(tickets)) {
      if (await validateCapacity()) {
        const newWindows = { ...windows };
        newWindows.Step3 = true;
        newWindows.Step2 = false;
        setWindows(newWindows);
      } else {
        alert("Insufficient capacity");
      }
    } else {
      alert("You need to enter at least one ticket");
    }
  };

  const add = (ticketOption) => {
    const newTickets = addTicket(ticketOption, tickets);
    setTickets(newTickets);
    addTicketsToReservation(newTickets);
  };

  const delete_ = (ticketOption) => {
    const newTickets = deleteTicket(ticketOption, tickets);
    setTickets(newTickets);
    addTicketsToReservation(newTickets);
  };

  const addTicketsToReservation = async (array) => {
    const newReservationData = { ...reservationData };
    const formatedTickets = formatAllTickets(reservationData, array);
    newReservationData.Tickets = formatedTickets;
    await setReservationData(newReservationData);
  };

  const deleteTicketsFromReservation = () => {
    const newReservationData = { ...reservationData };
    newReservationData.Tickets = [];
    setReservationData(newReservationData);
  };

  useEffect(() => {
  }, [ticketPrices]);

  return (
    <>
      {windows.Step2 && (
        <div className="mb-10 h-full w-full">
          <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">
            {reservationData.Reservation_Type === 0 ? "Picnic" : "Camping"}
          </h2>
          <Table colums={colums}>
            {ticketOptions.map((ticketOption, index) => (
              <TableItem
                key={index}
                number={index}
                data={[
                  ticketOption,
                  getTicketCurrency(extractTicketData(ticketOption, reservationData.Reservation_Type)) 
                  + extractTicketData(ticketOption, reservationData.Reservation_Type).Price,
                  getTicketQuantity(ticketOption, tickets),
                  <Button
                    text="+"
                    type="add"
                    onclickFunction={() => add(ticketOption)}
                  />,
                  <Button
                    text="-"
                    type="delete"
                    onclickFunction={() => delete_(ticketOption)}
                  />,
                ]}
              />
            ))}
          </Table>
          <div className="mx-2 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2">
            <div className="my-8">
              <Button text="Back" onclickFunction={backToStep1} />
            </div>
            <div className="my-8">
              <Button text="Next" onclickFunction={goToStep3} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationStep2;
