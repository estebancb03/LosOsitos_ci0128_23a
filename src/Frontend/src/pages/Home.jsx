import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import ReservationStep10 from "../components/Reservation/ReservationStep10";

const Home = () => {
  return (
    <>
      <NavMenu />
      <Container>
        <ReservationStep10/>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
