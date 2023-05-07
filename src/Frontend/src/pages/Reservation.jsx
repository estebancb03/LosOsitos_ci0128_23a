import { useState } from "react";
import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import ReservationStep0 from "../components/Reservation/ReservationStep0";
import ReservationStep2 from "../components/Reservation/ReservationStep2";
import ReservationStep5 from "../components/Reservation/ReservationStep5";

const Reservation = () => {
  // State that controls the visibility of the windows
  const [windows, setWindows] = useState({
    Step0: true,
    Step1: false,
    Step2: false,
    Step3: false,
    Step4: false,
    Step5: false,
    Step6: false,
    Step7: false,
  });
  // State that controls the reservation data
  const [reservationData, setReservationData] = useState({});
  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Reservation" />
        <div className="mt-6 shadow-sm ring-4 ring-inset rounded-md ring-[#21295c] mx-96 sm:mx-6 md:mx-16">
          <Container>
            <ReservationStep0
              windows={windows}
              setWindows={setWindows}
              reservationData={reservationData}
              setReservationData={setReservationData}
            />
            <ReservationStep2
              windows={windows}
              setWindows={setWindows}
              reservationData={reservationData}
              setReservationData={setReservationData}
            />
            <ReservationStep5
              windows={windows}
              setWindows={setWindows}
            />
          </Container>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Reservation;
