import React from "react";
import { useEffect, useState } from "react";

import useUser from "../hooks/useUser";
import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import InputButton from "../components/Buttons/InputButton";
import PasswordButton from "../components/Buttons/PasswordButton";
import img from "../assets/images/3-asojunquillal-logo.png";

const LogIn = () => {
  const [user, setUser] = useState({});
  const { modifyUserData, authUser } = useUser();
  
  const changeUserData = (type, value) => {
    setUser(modifyUserData(type, value, user));
  };

  const login = async () => {
    await setUser(await authUser(user));
  };

  return (
    <>
      <NavMenu />
      <Container>
        <Title name="LogIn"/>
        <Container>
          <div className="flex items-center justify-center">
            <div className="flex h-full w-[50%] md:w-[100%] sm:w-[100%] ring-4 ring-[#004e98] rounded-lg drop-shadow-md">
              <img className="float-left my-10 mx-10 h-64 w-64" src={img} />
              <div className=" h-full w-full mr-10 my-10">
                <div className="my-5 grid grid-cols-1">
                  <InputButton
                    text="Username"
                    type="username"
                    placeholderText=""
                    disabled={false}
                    onChangeFunction={changeUserData}
                  />
                </div>
                <div className="my-5 grid grid-cols-1">
                  <PasswordButton
                    text="Password"
                    type="userpassword"
                    placeholderText=""
                    disabled={false}
                    onChangeFunction={changeUserData}
                  />
                </div>
                <div className="my-5">
                  <Button
                    text="Log In"
                    onclickFunction={login}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default LogIn;
