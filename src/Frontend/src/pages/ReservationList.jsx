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
  return (
    <>
      <NavMenu />
      <Container>
        <ReservationListModal state={false} setState="" title="Reservation Data">
          
        </ReservationListModal> 
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
            ""
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
                <Button text="View" />
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
