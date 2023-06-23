import { useState } from "react";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import playaDev from "../assets/images/wallpaper.jpg";
import Button from "../components/Buttons/Button";
import InputButton from "../components/Buttons/InputButton";
import DropDownSelect from "../components/Buttons/DropDownSelect";

const ContactUs = () => {
  return (
    <>
        <NavMenu />
        <div className="bg-center bg-opacity-50 h-96  relative">
            <img src={playaDev} alt="Playa Dev" className="h-full w-full object-cover bg-opacity-50" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
              Contact us
            </div>  
        </div>
        <div className="flex justify-start justify-items-start space-x-10">
          <div className="flex flex-col">
            <InputButton
              disabled={false}
              type="Name"
              text="Name"
              placeholderText=""
            />
            <InputButton
              disabled={false}
              type="Email"
              text="Email"
              placeholderText=""
            />
          </div>
          <div className="flex flex-col">
            <InputButton
              disabled={false}
              type="Phone"
              text="Phone"
              placeholderText=""
            />
            <InputButton
              disabled={false}
              type="Message"
              text="Message"
              placeholderText=""  
            />
          </div>
        </div>
        <div className="flex justify-end items-center "> 
          <h1 className="font-bold text-4xl">Info</h1>
          <br></br>
          <p>Phone number: +506 8906-0672</p>
          <br></br>
          <p>Email: apatubaju@gmail.com</p>
          <br></br>
        </div>
        <Footer />
    </>
  );
};

export default ContactUs;