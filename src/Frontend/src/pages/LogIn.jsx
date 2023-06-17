import React from "react";
import { useEffect, useState } from "react";

import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import InputButton from "../components/Buttons/InputButton";
import PasswordButton from "../components/Buttons/PasswordButton";

const LogIn = () => {
  
  return (
    <>
      <NavMenu />
      <Container>
        <Title name="LogIn"/>
      </Container>
      <Footer />
    </>
  );
};

export default LogIn;
