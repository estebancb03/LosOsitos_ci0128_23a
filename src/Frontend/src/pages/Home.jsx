import { useState } from "react";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Container";
import ReservationStep7 from "../components/Reservation/ReservationStep7";

const Home = () => {
  return (
    <>
      <NavMenu />
      <Container>
        <ReservationStep7/>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
