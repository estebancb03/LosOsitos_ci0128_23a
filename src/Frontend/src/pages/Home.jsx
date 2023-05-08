import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import ReservationStep1 from "../components/Reservation/ReservationStep1";

const Home = () => {
  return (
    <>
      <NavMenu />
      <Container>
        <ReservationStep1 />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
