import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import ReservationStep0 from "../components/Reservation/ReservationStep0";

const Reservation = () => {
  return <>
    <NavMenu />
    <Container>
      <Title name="Reservation" />
      <div className="mt-6 shadow-sm ring-4 ring-inset rounded-md ring-[#21295c] mx-96 sm:mx-6">
        <Container>
          <ReservationStep0 />
        </Container>
      </div>
    </Container>
    <Footer />
  </>;
};

export default Reservation;
