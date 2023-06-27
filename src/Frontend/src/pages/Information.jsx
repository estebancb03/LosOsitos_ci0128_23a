import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import backgroundImage from "../assets/images/playaDev.jpeg";

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
      className="text-center pt-20 z-10 text-gray-600 font-semibold text-6xl"
      style={{ ...style }}
    >
      {title}
    </h1>
  );
};

const Information = () => (
  <>
    <NavMenu />
    <div className="relative">
      <img
        src={backgroundImage}
        alt="Header background image"
        className="h-80 w-full object-cover object-center filter brightness-50"
      />
      <div className="z-30">
        <h1 className="text-center text-white font-semibold text-6xl mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Information
        </h1>
      </div>
    </div>
    <Container>
      <h1 className="text-3xl font-semi-bold mb-4">Junquillal Beach</h1>
      <p className="text-lg leading-relaxed mb-4">
        This refuge boasts a quiet beach 2 kilometers long with exceptional
        beauty. It is the only beach in the entire canton of La Cruz that has
        parking, camping area, tables, showers, bathrooms. Because it is located
        in a conservation area. It is a special place for families!
      </p>
      <br></br>
      <h1 className="text-3xl font-semi-bold mb-4">Walking trails</h1>
      <p className=" text-lg leading-relaxed mb-4">
        The site has 3 small trails through a dry forest ecosystem.
      </p>
      <ul className="list-disc">
        <li className=" text-lg leading-relexed mb-4">
          El Carao Trail: It is suitable for all types of public, has a length
          of 600 meters in circular form. The objective of this trail is to see
          the regeneration zone and the dry forest that characterizes it, you
          can also see or hear birds such as parakeets, crab hawks, magpies,
          parrots, among others (Guanacaste Conservation Area, 2021).
        </li>
        <li className=" text-lg leading-relexed mb-4">
          El Estero Seco Trail: It is a trail suitable for all public, has a
          length of 800 meters in linear form, has a duration of approximately
          20 minutes, this trail has many organisms of the coastal area, you can
          easily observe crabs, raccoons, hawks, fish (Guanacaste Conservation
          Area, 2021).
        </li>
        <li className=" text-lg leading-relaxed mb-4">
          La Laguna Trail: It is a trail suitable for all public, has a length
          of 800 meters in a semi-linear way within the attractions is the
          lagoon, landscape of the beach. It is possible to observe birds and
          mammals. In the rainy season you can observe many organisms of the
          coastal area, and you can easily observe migratory birds in the lagoon
          (Guanacaste Conservation Area, 2021).
        </li>
      </ul>
      <br></br>
      <h1 className="text-3xl font-semi-bold mb-4">Services</h1>
      <p className=" text-lg leading-relaxed mb-4">
        The refuge counts with several services to make your time here a more
        pleasent and fun memory
      </p>
      <ul className="list-disc">
        <li className=" text-lg leading-relexed mb-4">
          Camping Area: This area has a capacity for 80 people, in a designated
          and well marked area, and in some spaces there are a number of
          facilities such as tables, grills and a sink for use. This activity
          must follow the recommendations of the officials in the area.
        </li>
        <li className=" text-lg leading-relexed mb-4">
          Picnic Area or Area for the day: this is located in the southern part
          of the refuge, it is marked by spaces and has some facilities; tables,
          grills and a sink for use.
        </li>
        <li className=" text-lg leading-relaxed mb-4">
          Campers Area: is a marked area for camper vehicles.
        </li>
        <li className=" text-lg leading-relaxed mb-4">
          Restrooms: located 50 meters from the information booth for use by day
          visitors and campers.
        </li>
        <li className=" text-lg leading-relaxed mb-4">Showers</li>
        <li className=" text-lg leading-relaxed mb-4">
          Kayak and bike rentals
        </li>
      </ul>
    </Container>

    <Footer />
  </>
);

export default Information;
