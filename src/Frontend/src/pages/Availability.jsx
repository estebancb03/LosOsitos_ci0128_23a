import Title from "../components/Title";
import Table from "../components/Table/Table";
import TableItem from "../components/Table/TableItem";
import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import StatusText from "../components/StatusText";
import NavMenu from "../components/NavMenu/NavMenu";

const Availability = () => {
  return <div>
    <NavMenu />
    <Container>
      <Title name="Availability" />
      <Table colums={['Parcel', 'Customer', 'Start date', 'End date', 'State', 'Action']}>
        <TableItem number='1' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Reserved" status="reserved" />, <button>Holaa</button>]}/>
        <TableItem number='2' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Available" status="available" />, <button>Holaa</button>]}/>
        <TableItem number='3' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Unvailable" status="unavailable" />, <button>Holaa</button>]}/>
        <TableItem number='4' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Reserved" status="reserved" />, <button>Holaa</button>]}/>
        <TableItem number='5' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Available" status="available" />, <button>Holaa</button>]}/>
        <TableItem number='6' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Unvailable" status="unavailable" />, <button>Holaa</button>]}/>
        <TableItem number='7' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Reserved" status="reserved" />, <button>Holaa</button>]}/>
        <TableItem number='8' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Available" status="available" />, <button>Holaa</button>]}/>
        <TableItem number='9' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Unvailable" status="unavailable" />, <button>Holaa</button>]}/>
        <TableItem number='10' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Reserved" status="reserved" />, <button>Holaa</button>]}/>
        <TableItem number='11' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Available" status="available" />, <button>Holaa</button>]}/>
        <TableItem number='12' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Unvailable" status="unavailable" />, <button>Holaa</button>]}/>
        <TableItem number='13' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Reserved" status="reserved" />, <button>Holaa</button>]}/>
        <TableItem number='14' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Available" status="available" />, <button>Holaa</button>]}/>
        <TableItem number='15' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Unvailable" status="unavailable" />, <button>Holaa</button>]}/>
        <TableItem number='16' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Reserved" status="reserved" />, <button>Holaa</button>]}/>
        <TableItem number='17' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Available" status="available" />, <button>Holaa</button>]}/>
        <TableItem number='18' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Unvailable" status="unavailable" />, <button>Holaa</button>]}/>
        <TableItem number='19' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Reserved" status="reserved" />, <button>Holaa</button>]}/>
        <TableItem number='20' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Available" status="available" />, <button>Holaa</button>]}/>
        <TableItem number='21' data={['1','Esteban', '23/04/2023', '25/04/2023', <StatusText text="Unvailable" status="unavailable" />, <button>Holaa</button>]}/>
      </Table>
    </Container>
    <Footer />
  </div>;
};

export default Availability;
