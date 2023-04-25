import Title from "./Title";
import Container from "./Container";
import * as IoIcons from "react-icons/io";

const ReservationListModal = ({ state, setState, title, children }) => {
  return (
    <>
      {state &&
        <div className="w-screen h-screen fixed top-0 left-0 p-10 flex justify-center bg-[#000000] bg-opacity-50">
          <div className="w-1/3 h-full md:w-2/3 sm:w-2/3 relative bg-[#FDFFFC] rounded-md drop-shadow-md">
            <Container>
              <button className="flex ml-[90%] text-4xl text-[#21295c] hover:text-[#6545e6] transition-all ease-in duration-300">
                <IoIcons.IoMdClose />
              </button>
              <div className="text-center">
                <Title name={title} />
              </div>
              {children}
            </Container>
          </div>
        </div>
      }
    </>
  );
};

export default ReservationListModal;
