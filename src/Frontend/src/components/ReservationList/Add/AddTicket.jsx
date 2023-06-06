import {useEffect, useState} from "react";
import Button from "../../Buttons/Button";
import DropDownSelect from "../../Buttons/DropDownSelect";
import InputButton from "../../Buttons/InputButton";
import useTicket from "../../../hooks/useTicket";

const AddTicket = (props) => {
  const {
    disabledElements,
    currentRecord,
    setCurrentRecord
  } = props;
  const {ticketOptions, formatTicket, extractTicketData, modifyNewTicket} = useTicket();
  const [availableTickets, setAvailableTickets] = useState([]);
  const [buttonVisibility, setButtonVisibility] = useState(true);

  const getTicketsNames = () => {
    if (currentRecord.Tickets) {
      return currentRecord.Tickets.map((ticket) => formatTicket(ticket));
    }
    return [];
  };

  const getNewTicketsNames = () => {
    if (currentRecord.NewTickets.length !== 0) {
      return currentRecord.NewTickets.map((ticket) => formatTicket(ticket));
    }
    return [];
  };

  const validateButtonVisibility = () => {
    const reservationTickets = getTicketsNames();
    const newReservationTickets = getNewTicketsNames();
    const allReservationTickets = [...new Set([...reservationTickets, ...newReservationTickets])];
    if (allReservationTickets.length === ticketOptions.length && allReservationTickets.length !== 0) {
      setButtonVisibility(false);
    }
  };

  const filterAvailableTickets = () => {
    const reservationTickets = getTicketsNames();
    const newAvailableTickets = availableTickets.filter(ticket => reservationTickets.includes(ticket) === false);
    setAvailableTickets(newAvailableTickets);
    return newAvailableTickets;
  };

  const addTicket = () => {
    const currentAvailableTickets = filterAvailableTickets();
    const newCurrentRecord = {...currentRecord};
    const data = extractTicketData(currentAvailableTickets[0], currentRecord.Reservation_Type);
    let tickets = [...currentRecord.NewTickets];
    tickets = [{
      ID_Client: currentRecord.ID,
      Reservation_Date: currentRecord.Reservation_Date,
      Reservation_Type: currentRecord.Reservation_Type,
      Age_Range: data.Age_Range,
      Demographic_Group: data.Demographic_Group,
      Special: data.Special,
      Amount: 1,
      Price: data.Price
    }, ...tickets];
    newCurrentRecord.NewTickets = tickets;
    setCurrentRecord(newCurrentRecord);
  };

  const changeTicket = (type, value) => {
    const newCurrentRecord = modifyNewTicket(type, value, currentRecord);
    setCurrentRecord(newCurrentRecord);
  }

  useEffect(() => setAvailableTickets(ticketOptions), []);

  useEffect(() => {
    if (currentRecord) {
      validateButtonVisibility();
    }
  });

  return (
    <>
      {disabledElements === false && buttonVisibility && (
        <div className="mt-4 mb-2">
          <Button
            text="Add ticket"
            type="add"
            disabled={disabledElements}
            onclickFunction={addTicket}
          />
        </div>
      )}
      {currentRecord.NewTickets &&
        currentRecord.NewTickets.map((ticket, index) => (
          <div key={index} className="flex">
            <div className="bg-gray-100 w-full rounded-sm my-2">
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
                <div className="mt-1 mb-1.5 sm:-mb-4">
                  <DropDownSelect
                    options={availableTickets}
                    selectedOption={formatTicket(ticket)}
                    disabled={disabledElements}
                    typeChange={["name", index]}
                    onChangeFunction={changeTicket}
                  />
                </div>
                <div className="mt-1 mb-1.5 sm:mt-0">
                  <InputButton
                    key={index}
                    type={["amount", index]}
                    placeholderText={ticket.Amount}
                    disabled={disabledElements}
                    onChangeFunction={changeTicket}
                  />
                </div>
                <div>
                  <label className="-mt-4 mb-3 block mx-3 text-md font-regular leading-6 text-gray-900">
                <span className="mx-1">
                  <input
                    type="checkbox"
                    disabled={disabledElements}
                    checked={ticket.Special === 1}
                    onChange={() => changeTicket(["special", index], ticket.Special === 0 ? 1 : 0)}
                  />
                </span>
                    <span>Special</span>
                  </label>
                </div>
              </div>
              <div className="h-1 bg-gray-200 rounded-sm my-2 mx-2"></div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
                <div>
                  <label className="block mt-4 mx-3 text-md font-regular leading-6 text-gray-900">
                    Price
                  </label>
                  <div className="">
                    {ticket.Demographic_Group == 0 ? (
                      <div className="mt-1 mb-1">
                        <InputButton
                          type={["price", index]}
                          placeholderText={"₡" + ticket.Price.toLocaleString("en-us")}
                          disabled={true}
                        />
                      </div>
                    ) : (
                      <div className="mt-1 mb-1">
                        <InputButton
                          type={["price", index]}
                          placeholderText={"$" + ticket.Price.toLocaleString("en-us")}
                          disabled={true}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  {ticket.Special === 1 && (
                    <div>
                      <label className="block mt-4 mx-3 text-md font-regular leading-6 text-gray-900">
                        Special Price
                      </label>
                      <div className="">
                        <div className="mt-1 mb-1">
                          <InputButton
                            type={["price", index]}
                            placeholderText={ticket.Price.toLocaleString("en-us")}
                            disabled={false}
                            onChangeFunction={changeTicket}
                          />
                        </div>
                      </div>
                    </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default AddTicket;
