import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import ReservationStep0 from "../components/Reservation/ReservationStep0";

const Home = () => {
  return (
    <>
      <NavMenu />
      <Container>
        <ReservationStep0 />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
