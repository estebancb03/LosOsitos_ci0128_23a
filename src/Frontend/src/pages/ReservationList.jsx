import { useEffect, useState } from "react";

import Title from "../components/Title";
import Modal from "../components/Modal";
import Button from "../components/Buttons/Button";
import Table from "../components/Table/Table";
import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import InputButton from "../components/Buttons/InputButton";
import NavMenu from "../components/NavMenu/NavMenu";
import TableItem from "../components/Table/TableItem";

import AvailabilityTestData from "../data/ReservationTestData";

const ReservationList = () => {
  const [viewModal, setViewModal] = useState(false);
  const [addCarModal, setAddCarModal] = useState(false);
  const [information, setInformation] = useState({});

  const tableColums = [
    "Id",
    "Customer",
    "Reservation date",
    "Start date",
    "End date",
    "Products",
    "Pay",
    "",
    "",
  ];

  const setModalDataStatus = (itemID) => {
    const itemSelected = AvailabilityTestData.filter(
      (item) => item.reservationId == itemID
    );
    setInformation(itemSelected[0]);
    setViewModal(true);
  };

  const extractProductNames = (products) => {
    const result = products.map((product) => product.name);
    return result;
  };

  return (
    <>
      <NavMenu />
      <Container>
        <Modal
          state={viewModal}
          setState={setViewModal}
          title="Reservation Data"
        >
          <InputButton text="Reservation ID" placeholderText={information.reservationId} disabled={true}/>
          <InputButton text="Costumer ID" placeholderText={information.id} disabled={true}/>
          <InputButton text="Name" placeholderText={information.customer} disabled={true}/>
          <InputButton text="Nationality" placeholderText={information.nationality} disabled={true}/>
        {/* <div className="my-3 grid grid-cols-1">
            <div className="mb-2 text-lg">
              <span className="font-semibold">Reservation id:</span> {information.reservationId}
            </div>
            <div className="mb-2 text-lg">
              <span className="font-semibold">Id:</span> {information.id}
            </div>
            <div className="mb-2 text-lg">
              <span className="font-semibold">Name:</span>{" "}
              {information.customer}
            </div>
            <div className="mb-2 text-lg">
              <span className="font-semibold">Nationality:</span>{" "}
              {information.nationality}
            </div>
            <div className="mb-2 text-lg">
              <span className="font-semibold">Reservation date:</span>{" "}
              {information.reservationDate}
            </div>
            <div className="mb-2 text-lg">
              <span className="font-semibold">Start date:</span>{" "}
              {information.startDate}
            </div>
            <div className="mb-2 text-lg">
              <span className="font-semibold">End date:</span>{" "}
              {information.endDate}
            </div>
            <div className="mb-2 text-lg">
              <span className="font-semibold">
                People({information.peopleQuantity}):
              </span>
              <ul className="mb-2 list-disc">
                {information.peopleType &&
                  information.peopleType.map((person, index) => (
                    <li key={index} className="mb-2 ml-10">
                      {person.costarican ? "National" : "Foreign"},{" "}
                      {person.adult ? "Adult" : "Child"}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mb-2 text-lg">
              <span className="font-semibold">Product:</span>
              <ul className="mb-2 list-disc">
                {information.products &&
                  information.products.map((product, index) => (
                    <li key={index} className="mb-2 ml-10">
                      {product.name} (${product.price})
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mb-2 text-lg">
              <span className="font-semibold">Car plates:</span>
              <ul className="mb-2 list-disc">
                {information.plateNumbers &&
                  information.plateNumbers.map((plateNumber, index) => (
                    <li key={index} className="mb-2 ml-10">
                      {plateNumber}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mb-2 text-lg font-semibold">
              Total: ${information.totalPrice}
            </div>
          </div> */}
        </Modal>
        <Modal
          state={addCarModal}
          setState={setAddCarModal}
          title="Add Plate Number"
        ></Modal>
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
                extractProductNames(record.products),
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
