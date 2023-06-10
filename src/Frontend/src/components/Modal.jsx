import Title from "./Title";
import Container from "./Containers/Container";
import * as IoIcons from "react-icons/io";

const Modal = ({ state, setState, exitFunction, title, children }) => {
  return (
    <>
      {state && (
        <div className="w-screen h-screen fixed top-0 left-0 p-10 flex justify-center bg-[#000000] bg-opacity-50 z-10">
          <div className="w-1/3 h-full md:w-4/6 sm:w-5/6 relative bg-[#FDFFFC] rounded-md drop-shadow-md overflow-y-scroll">
            <Container>
              <button
                className="flex ml-[90%] text-4xl text-[#21295c] hover:text-[#6545e6] transition-all ease-in duration-300"
                onClick={(e) => {
                  setState(false);
                  exitFunction();
                }}
              >
                <IoIcons.IoMdClose />
              </button>
              <div className="text-center">
                <Title name={title} />
              </div>
              {children}
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
