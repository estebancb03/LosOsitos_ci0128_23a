import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";

const ParkStatus = () => {
  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Park Status" />
        <div className="mt-6 shadow-sm ring-4 ring-inset rounded-md ring-[#21295c] mx-96 sm:mx-6 md:mx-10">
          <Container>

          </Container>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ParkStatus;
