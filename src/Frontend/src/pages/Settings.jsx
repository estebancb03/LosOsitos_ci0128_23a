import React from "react";
import Title from "../components/Title";
import NavMenu from "../components/NavMenu/NavMenu";
import Footer from "../components/Footer/Footer";
import Container from "../components/Containers/Container";
import Capacity from "../components/Settings/Capacity";
import Tickets from "../components/Settings/Tickets";

const Settings = () => {
  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Settings" />
        <div className="mt-6 shadow-sm ring-4 ring-inset rounded-md ring-[#21295c] mx-96 sm:mx-6 md:mx-10" />
        <span className="ml-1 text-2xl sm:text-2xl font-semibold">
          Capacity
        </span>
        <Capacity />
        <div className=" mt-4 ml-1 text-2xl sm:text-2xl font-semibold">
          Tickets
        </div>
        <Tickets />
      </Container>
      <Footer />
    </>
  );
};

export default Settings;
