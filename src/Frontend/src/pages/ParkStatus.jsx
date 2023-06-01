import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import * as BsIcons from "react-icons/bs";

const ParkStatus = () => {
  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Park Status" />
        <div className="object-center flex gap-4 flex-wrap place-content-center my-2">
          <div className="w-2/5 text-center border-2 border-[#21295c] rounded">
            <BsIcons.BsCarFrontFill />
          </div>
          <div className="w-2/5 text-center border-2 border-[#21295c] rounded">
            <BsIcons.BsCarFrontFill />
          </div>
          <div className="w-2/5 text-center border-2 border-[#21295c] rounded">
            <BsIcons.BsCarFrontFill />
          </div>
          <div className="w-2/5 text-center border-2 border-[#21295c] rounded">
            <BsIcons.BsCarFrontFill />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ParkStatus;
