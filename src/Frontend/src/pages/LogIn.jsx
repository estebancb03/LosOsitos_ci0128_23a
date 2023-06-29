import React from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import useUser from "../hooks/useUser";
import useAuth from "../hooks/useAuth";
import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import InputButton from "../components/Buttons/InputButton";
import PasswordButton from "../components/Buttons/PasswordButton";
import img from "../assets/images/3-asojunquillal-logo.png";

const LogIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { modifyUserData } = useUser();
  const { authUser, deauthUser } = useAuth();
  
  const changeUserData = (type, value) => {
    setUser(modifyUserData(type, value, user));
  };

  const login = async () => {
    const authToken = await authUser(user);
    if (authToken.token) {
      localStorage.setItem('auth-token', authToken.token);
      const decoded = jwt_decode(authToken.token);
      if (decoded.Type === 0) {
        navigate("/admin");
      } else if (decoded.Type === 1) {
        navigate("/operator");
      }
    } else {
      alert("Incorrect user credentials");
    }
  };

  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Log In"/>
        <Container>
          <div data-cy="login-form" className="flex items-center justify-center">
            <div className="w-[20%] md:w-[100%] sm:w-[100%] bg-gradient-to-l from-[#219ebc] to-[#4ecdc4] drop-shadow-md">
            <div className="shadow-sm rounded-sm bg-gradient-to-l from-[#219ebc] to-[#4ecdc4] h-1"></div>
              <div className="bg-[#FDFFFC] mx-1">
                <img className="mx-auto h-64 w-64" src={img} />
                <div className="mt-5 mx-10 grid grid-cols-1">
                  <InputButton
                    datacy="username-input"
                    text="Username"
                    type="username"
                    placeholderText=""
                    disabled={false}
                    onChangeFunction={changeUserData}
                  />
                </div>
                <div className="mt-5 mx-10 grid grid-cols-1">
                  <PasswordButton
                    datacy="password-input"
                    text="Password"
                    type="userpassword"
                    placeholderText=""
                    disabled={false}
                    onChangeFunction={changeUserData}
                    onPressEnterFunction={login}
                  />
                </div>
                <div className="mt-5 mx-10">
                  <Button
                    datacy="submit-button"
                    text="Log In"
                    onclickFunction={login}
                  />
                </div>
                <div className="h-5"></div>
              </div>
            <div className="shadow-sm rounded-sm bg-gradient-to-l from-[#219ebc] to-[#4ecdc4] h-1"></div>
            </div>
          </div>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default LogIn;
