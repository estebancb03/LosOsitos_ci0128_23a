import React from "react";
import Title from "../components/Title";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import Capacity from "../components/Settings/Capacity";
import Tickets from "../components/Settings/Tickets";
import ExchangeRate from "../components/Settings/ExchangeRate";
import Services from "../components/Settings/Services";
import TermsAndConditions from "../components/Settings/TermsAndConditions";

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
        <div className=" mt-4 ml-1 text-2xl sm:text-2xl font-semibold">
          Exchange Rate
        </div>
        <ExchangeRate />
        <div className=" mt-4 ml-1 text-2xl sm:text-2xl font-semibold">
          Services
        </div>
        <Services />
        <div className=" mt-4 ml-1 text-2xl sm:text-2xl font-semibold">
          Terms And Conditions
        </div>
        <TermsAndConditions />
      </Container>
    </>
  );
};

export default Settings;
