import InputButton from "../../Buttons/InputButton";
import DatePickerButton from "../../Buttons/DatePickerButton";
import AddService from "../Add/AddService";
import useServices from "../../../hooks/useServices";

const ShowServices = (props) => {
  // Props
  const {
    disabledElements,
    reservation,
    setReservation
  } = props;
  // Services hook
  const {searchServicePrice} = useServices();

  // Method that changes the service
  const changeService = (type, value) => {
    const newReservation = {...reservation};
    const newServices = [...reservation.Services];
    newServices[type[1]].Quantity = value;
    newReservation.Services = newServices;
    setReservation(newReservation);
  };

  return (
    <>
      <label className="block text-xl font-semibold leading-6 text-gray-900 mb-3 mt-6">
        Services
      </label>
      {disabledElements === false && (
        <AddService
          disabledElements={false}
          currentRecord={reservation}
          setCurrentRecord={setReservation}
        />
      )}
      {reservation.Services &&
        reservation.Services.map((service, index) => (
          <div key={index} className="flex">
            <div className="bg-gray-100 w-full rounded-sm my-2">
              <label className="block text-lg font-semibold ml-3 leading-6 mt-2 text-gray-900">
                {service.Name_Service}
              </label>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
              <span className="mr-2 sm:mr-7">
                <DatePickerButton
                  text=""
                  typeClass="2"
                  disabled={true}
                  type={["services", "date", index]}
                  selectedDate={new Date(service.Reservation_Date)}
                  onChangeFunction={changeService}
                />
              </span>
                <div className="mt-0.5 mb-3">
                  <InputButton
                    type={["quantity", index]}
                    placeholderText={service.Quantity}
                    disabled={disabledElements}
                    onChangeFunction={changeService}
                  />
                </div>
              </div>
              <div className="h-1 bg-gray-200 rounded-sm my-2 mx-2"></div>
              <label className="block mt-4 mx-3 text-md font-regular leading-6 text-gray-900">
                Prices
              </label>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mt-3 mb-2">
                {reservation.Country_Name === "Costa Rica" ? (
                  <div className="-mt-4 mb-3">
                    <InputButton
                      type={["price", index]}
                      placeholderText={"₡" + service.Price}
                      disabled={true}
                      onChangeFunction={changeService}
                    />
                  </div>
                  ) : (
                    <div className="-mt-4 mb-3">
                      <InputButton
                        type={["price", index]}
                        placeholderText={"$" + service.Price}
                        disabled={true}
                        onChangeFunction={changeService}
                      />
                    </div>
                    )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ShowServices;
