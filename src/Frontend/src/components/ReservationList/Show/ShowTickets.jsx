import InputButton from "../../Buttons/InputButton";
import DropDownSelect from "../../Buttons/DropDownSelect";
import useTicket from "../../../hooks/useTicket";
import AddTicket from "../Add/AddTicket";
import ShowFee from "./ShowFee";
import useCalculateFees from "../../../hooks/useCalculateFees";

const ShowTickets = (props) => {
  // Props
  const {
    disabledElements,
    reservation,
    setReservation
  } = props;
  const {ticketOptions, ticketPrices, formatTicket, modifyTicket} = useTicket();
  const { calculateAllTicketsFee } = useCalculateFees(reservation);

  const changeTicket = (type, value) => {
    const newReservation = modifyTicket(type, value, reservation);
    setReservation(newReservation);
  };

  return (
    <>
      <label className="block text-xl font-semibold leading-6 text-gray-900 mt-6">Tickets</label>
      {disabledElements === false && (
        <AddTicket
          disabledElements={false}
          currentRecord={reservation}
          setCurrentRecord={setReservation}
        />
      )}
      <div className="grid grid-cols-1 mt-2">
        {reservation.Tickets &&
          reservation.Tickets.map((ticket, index) => (
            <div key={index} className="flex">
              {disabledElements ? (
                <div className="bg-gray-100 w-full rounded-sm my-2">
                  <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
                    <div className="mt-1 mb-1.5 sm:-mb-4">
                      <InputButton
                        key={index}
                        placeholderText={formatTicket(ticket)}
                        disabled={true}
                      />
                    </div>
                    <div className="mt-1 mb-1.5 sm:mt-0">
                      <InputButton
                        key={index}
                        type={["amount", index]}
                        placeholderText={ticket.Amount}
                        disabled={disabledElements}
                        onChangeFunction={() => {
                        }}
                      />
                    </div>
                    <div>
                      <label className="-mt-4 mb-3 block mx-3 text-md font-regular leading-6 text-gray-900">
                        <span className="mx-1">
                          <input
                            type="checkbox"
                            disabled={disabledElements}
                            checked={ticket.Special}
                            onChange={() => {
                            }}
                          />
                        </span>
                        <span>Special</span>
                      </label>
                    </div>
                  </div>
                  <div className="h-1 bg-gray-200 rounded-sm my-2 mx-2"></div>
                  <label className="block mt-4 mx-3 text-md font-regular leading-6 text-gray-900">
                    Price
                  </label>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mt-3 mb-2">
                    {ticket.Demographic_Group == 0 ? (
                      <div className="-mt-4 mb-1">
                        <InputButton
                          type={["price", index]}
                          placeholderText={"₡" + ticket.Price.toLocaleString("en-us")}
                          disabled={true}
                        />
                      </div>
                    ) : (
                      <div className="-mt-4 mb-1">
                        <InputButton
                          type={["price", index]}
                          placeholderText={"$" + ticket.Price.toLocaleString("en-us")}
                          disabled={true}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 w-full rounded-sm my-2">
                  <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
                    <div className="mt-1 mb-1.5 sm:-mb-4">
                      <DropDownSelect
                        options={ticketOptions}
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
              )}
            </div>
          ))}
      </div>
      <ShowFee
        text="Subtotal"
        fees={calculateAllTicketsFee()}
      />
    </>
  );
};

export default ShowTickets;
