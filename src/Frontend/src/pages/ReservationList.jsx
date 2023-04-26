import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

import Title from "../components/Title";
import Modal from "../components/Modal";
import Button from "../components/Buttons/Button";
import Table from "../components/Table/Table";
import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import DropDownSelect from "../components/Buttons/DropDownSelect";
import InputButton from "../components/Buttons/InputButton";
import NavMenu from "../components/NavMenu/NavMenu";
import TableItem from "../components/Table/TableItem";

import AvailabilityTestData from "../data/ReservationTestData";

const ReservationList = () => {
  const [viewModal, setViewModal] = useState(false);
  const [information, setInformation] = useState({});
  const [modifyButton, setModifyButton] = useState("Modify");
  const [disabledButtons, setDisabledButtons] = useState(true);

  const tableColums = [
    "Id",
    "Customer",
    "Reservation date",
    "Start date",
    "End date",
    "Services",
    "Pay",
    "",
    "",
  ];

  const restartModal = () => {
    setViewModal(false);
    setDisabledButtons(true);
    setModifyButton("Modify");
  };

  const setModalDataStatus = (itemID) => {
    const itemSelected = AvailabilityTestData.filter(
      (item) => item.reservationId == itemID
    );
    setInformation(itemSelected[0]);
    setViewModal(true);
  };

  const extractProductNames = (services) => {
    const result = services.map((product) => product.name);
    return result;
  };

  return (
    <>
      <NavMenu />
      <Container>
        <Modal
          state={viewModal}
          setState={restartModal}
          title="Reservation Data"
        >
          <div className="my-3">
            {
              <Button
                text={modifyButton}
                onclickFunction={(e) => {
                  setDisabledButtons(!disabledButtons);
                  modifyButton === "Modify"
                    ? setModifyButton("Save changes")
                    : setModifyButton("Modify");
                }}
              />
            }
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
            <InputButton
              text="Reservation ID"
              placeholderText={information.reservationId}
              disabled={true}
            />
            <InputButton
              text="Costumer ID"
              placeholderText={information.id}
              disabled={disabledButtons}
            />
          </div>
          <InputButton
            text="Name"
            placeholderText={information.customer}
            disabled={disabledButtons}
          />
          <InputButton
            text="Nationality"
            placeholderText={information.nationality}
            disabled={disabledButtons}
          />
          <InputButton
            text="Reservation Date"
            placeholderText={information.reservationDate}
            disabled={disabledButtons}
          />
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mb-2">
            <InputButton
              text="Start Date"
              placeholderText={information.startDate}
              disabled={disabledButtons}
            />
            <InputButton
              text="End Date"
              placeholderText={information.endDate}
              disabled={disabledButtons}
            />
          </div>
          <label className="block text-xl font-semibold leading-6 text-gray-900">
            People ({information.peopleQuantity})
          </label>

          <div className="grid grid-cols-2 mt-2 mb-3">
            {information.peopleType &&
              information.peopleType.map((person, index) => (
                <span key={index} className="mx-1">
                  <DropDownSelect
                    disabled={disabledButtons}
                    options={[
                      "Foreign, Adult",
                      "Foreign, Child",
                      "National, Adult",
                      "National, Child",
                      "Special Visitor",
                    ]}
                  />
                </span>
              ))}
          </div>
          <label className="block text-xl font-semibold leading-6 text-gray-900">
            Services
          </label>
          {information.services &&
            information.services.map((service, index) => (
              <div key={index} className="flex">
                <div className="bg-gray-100 w-full rounded-sm my-2">
                <label className="block text-lg font-semibold ml-3 leading-6 mt-2 text-gray-900">
                  {service.name}
                </label>
                <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
                  <InputButton
                    text=""
                    placeholderText={service.date}
                    disabled={disabledButtons}
                  />
                  <DropDownSelect
                    disabled={disabledButtons}
                    options={[
                      service.hour,
                      "10:30",
                      "11:30",
                      "12:30",
                      "13:30",
                    ]}
                  />
                </div>
                </div>
              </div>
            ))}
          <label className="block text-xl font-semibold leading-6 text-gray-900">
            Plate Numbers
          </label>
          <div className="grid grid-cols-2 mb-3">
            {information.services &&
              information.plateNumbers.map((plateNumber, index) => (
                <InputButton
                  key={index}
                  placeholderText={plateNumber}
                  disabled={disabledButtons}
                />
              ))}
          </div>
          <InputButton
            text="Total price"
            placeholderText={information.totalPrice}
            disabled={disabledButtons}
          />
        </Modal>
        <Title name="Reservation List" />
        <Table colums={tableColums}>
          {AvailabilityTestData.map((record, index) => (
            <TableItem
              key={index}
              number={index}
              data={[
                record.id,
                record.customer,
                record.reservationDate,
                record.startDate,
                record.endDate,
                extractProductNames(record.services),
                record.totalPrice,
                <Button
                  text="View"
                  onclickFunction={(e) =>
                    setModalDataStatus(record.reservationId)
                  }
                />,
              ]}
            />
          ))}
        </Table>
      </Container>
      <Footer />
    </>
  );
};

export default ReservationList;
