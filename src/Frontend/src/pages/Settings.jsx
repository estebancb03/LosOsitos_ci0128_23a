import React from "react";
import Title from "../components/Title";
import NavMenu from "../components/NavMenu/NavMenu";
import Footer from "../components/Footer/Footer";
import Container from "../components/Containers/Container";
import useSettingCapacity from "../hooks/useSettingCapacity";

const Settings = () => {
  const { capacityValues } = useSettingCapacity();
  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Settings" />
        <div className="mt-6 shadow-sm ring-4 ring-inset rounded-md ring-[#21295c] mx-96 sm:mx-6 md:mx-10"></div>
      </Container>
      <Footer />
    </>
  );
};

export default Settings;
