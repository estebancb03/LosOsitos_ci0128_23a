import Title from "../components/Title";
import Table from "../components/Table/Table";
import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import StatusText from "../components/StatusText";
import NavMenu from "../components/NavMenu/NavMenu";
import TableItem from "../components/Table/TableItem";

import AvailabilityTestData from "../data/AvailabilityTestData";

const ReservationList = () => {
  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Availability" />
        <Table
          colums={[
            "Parcel",
            "Customer",
            "Start date",
            "End date",
            "State",
            "Action",
          ]}
        >
          {AvailabilityTestData.map((record, index) => (
            <TableItem
              key={index}
              number={index}
              data={[
                record.parcel,
                record.customer,
                record.startDate,
                record.endDate,
                <StatusText text={record.state} status={record.state} />,
                record.action,
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
