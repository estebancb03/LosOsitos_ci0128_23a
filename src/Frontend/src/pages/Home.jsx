import { useState } from "react";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import ReservationStep6 from "../components/Reservation/ReservationStep6Sinpe";

const Home = () => {
  return (
    <>
      <NavMenu />
      <Container>
        <ReservationStep6 />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
