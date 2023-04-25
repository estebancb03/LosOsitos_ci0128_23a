import { useState } from "react";

import Title from "../components/Title";
import Button from "../components/Button";
import Table from "../components/Table/Table";
import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import StatusText from "../components/StatusText";
import NavMenu from "../components/NavMenu/NavMenu";
import TableItem from "../components/Table/TableItem";
import ReservationListModal from "../components/ReservationListModal";

import AvailabilityTestData from "../data/AvailabilityTestData";

const ReservationList = () => {
  const [modal, setModal] = useState(true);
  const [modalInformation, setModalInformation] = useState({});

  return (
    <>
      <NavMenu />
      <Container>
        <ReservationListModal
          state={modal}
          setState={setModal}
          title="Reservation Data"
        ></ReservationListModal>
        <Title name="Reservation List" />
        <Table
          colums={[
            "Id",
            "Customer",
            "Reservation date",
            "Start date",
            "End date",
            "Products",
            "Pay",
            "",
          ]}
        >
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
                record.products,
                record.pay,
                <Button text="View" onclickFunction={(e) => setModal(true)} />,
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