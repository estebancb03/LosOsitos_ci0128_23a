import { useState } from "react";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import playaDev from "../assets/images/playaDev.jpeg";
import Button from "../components/Buttons/Button";

const Home = () => {
  return (
    <>
      <NavMenu />
      <div className="w-full h-screen relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img className="float-left h-full w-full blur-xs" src={playaDev} />
        <div className="relative h-screen">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full text-center text-white">
              <h1 className="text-5xl font-bold">ASOJUNQUILLAL</h1>
              <p className="text-3xl font-bold">Un retiro inolvidable</p>
              <div className=" mx-20%">
                <Button></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
