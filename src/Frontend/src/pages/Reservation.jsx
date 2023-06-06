import { useState } from "react";
import Title from "../components/Title";
import Footer from "../components/Footer/Footer";
import NavMenu from "../components/NavMenu/NavMenu";
import Container from "../components/Containers/Container";
import ReservationStep0 from "../components/Reservation/ReservationStep0";
import ReservationStep1 from "../components/Reservation/ReservationStep1";
import ReservationStep2 from "../components/Reservation/ReservationStep2";
import ReservationStep3 from "../components/Reservation/ReservationStep3";
import ReservationStep4 from "../components/Reservation/ReservationStep4";
import ReservationStep5 from "../components/Reservation/ReservationStep5";
import ReservationStep6 from "../components/Reservation/ReservationStep6";

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
  });
  // State that controls the reservation data
  const [reservationData, setReservationData] = useState({});
  return (
    <>
      <NavMenu />
      <Container>
        <Title name="Reservation" />
        <div className="mt-6 shadow-sm ring-4 ring-inset rounded-md ring-[#21295c] mx-96 sm:mx-6 md:mx-10">
          <Container>
            {windows.Step0 === true && (
              <ReservationStep0
                windows={windows}
                setWindows={setWindows}
                reservationData={reservationData}
                setReservationData={setReservationData}
              />
            )}
            {windows.Step1 === true && (
              <ReservationStep1
                windows={windows}
                setWindows={setWindows}
                reservationData={reservationData}
                setReservationData={setReservationData}
              />
            )}
            {windows.Step2 === true && (
              <ReservationStep2
                windows={windows}
                setWindows={setWindows}
                reservationData={reservationData}
                setReservationData={setReservationData}
              />
            )}
            {windows.Step3 === true && (
              <ReservationStep3
                windows={windows}
                setWindows={setWindows}
                reservationData={reservationData}
                setReservationData={setReservationData}
              />
            )}
            {windows.Step4 === true && (
              <ReservationStep4
                windows={windows}
                setWindows={setWindows}
                reservationData={reservationData}
                setReservationData={setReservationData}
              />
            )}
            {windows.Step5 === true && (
              <ReservationStep5
                windows={windows}
                setWindows={setWindows}
                reservationData={reservationData}
                setReservationData={setReservationData}
              />
            )}
            {windows.Step6 === true && (
              <ReservationStep6
                windows={windows}
                setWindows={setWindows}
                reservationData={reservationData}
                setReservationData={setReservationData}
              />
            )}
          </Container>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Reservation;
