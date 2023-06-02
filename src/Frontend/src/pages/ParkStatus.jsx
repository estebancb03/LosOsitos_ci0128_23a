import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

const ParkStatus = () => {
  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Park Status" />
        <div className="flex gap-4 flex-wrap place-content-center my-2">
          <div className="w-2/5 text-center border-2 border-[#21295c] rounded py-2">
            <span className="flex justify-center my-1">
              <BsIcons.BsPersonFill size={50} color="#21295c"/>
            </span> 
            <p>People</p>
            <p>24</p>
          </div>
          <div className="w-2/5 text-center border-2 border-[#21295c] rounded py-2">
            <span className="flex justify-center my-1">
              <BsIcons.BsCarFrontFill size={50} color="#21295c"/>
            </span> 
            <p>Vehicles</p>
            <p>24</p>
          </div>
          <div className="w-2/5 text-center border-2 border-[#21295c] rounded py-2">
            <span className="flex justify-center my-1">
              <GiIcons.GiCampingTent size={50} color="#21295c"/>
            </span> 
            <p>Camping</p>
            <p>24</p>
          </div>
          <div className="w-2/5 text-center border-2 border-[#21295c] rounded py-2">
            <span className="flex justify-center my-1">
              <RiIcons.RiShoppingBasketFill size={50} color="#21295c"/>
            </span> 
            <p>Picnic</p>
            <p>24</p>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ParkStatus;
