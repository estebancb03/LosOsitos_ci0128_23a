import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import backgroundImage from "../assets/images/bancas.jpg";

const Container = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {children}
    </div>
  );
};

const Title = ({ title, style }) => {
  return (
    <h1
      className="text-center z-10 text-white font-semibold text-6xl absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{ ...style }}
    >
      {title}
    </h1>
  );
};

const MeetJunquillal = () => (
  <>
    <NavMenu />
    <div className="relative">
      <img
        src={backgroundImage}
        alt="Header background image"
        className="h-80 w-full object-cover object-center filter brightness-50"
      />
      <Title title="Meet Junquillal" />
    </div>
    <Container style={{ backgroundColor: "#fff" }}>
      <h1 className="text-3xl font-semi-bold mb-4">Junquillal Beach</h1>
      <p className="text-lg leading-relaxed mb-4">
        This refuge boasts a quiet beach 2 kilometers long with exceptional
        beauty. It is the only beach in the entire canton of La Cruz that has
        parking, camping area, tables, showers, bathrooms. Because it is located
        in a conservation area. It is a special place for families!
      </p>
      <br></br>
      <h1 className="text-3xl font-semi-bold mb-4">Walking trails</h1>
    </Container>
    <Footer />
  </>
);

export default MeetJunquillal;