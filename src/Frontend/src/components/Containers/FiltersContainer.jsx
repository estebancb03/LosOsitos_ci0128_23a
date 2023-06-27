import Title from "../Title";
import Button from "../Buttons/Button";

const FiltersContainer = ({ applyFunction, restartFunction, children }) => {
  return (
    <>
      <div className="mt-5 mb-2 rounded-sm bg-gradient-to-l from-[#219ebc] to-[#4ecdc4]">
        <div className="h-1 rounded-sm"></div>
        <div className="bg-[#FDFFFC] mx-1">
          <div className="h-1"></div>
          <div className="grid grid-cols-6 sm:grid-cols-2 md:grid-cols-6 mt-7 mx-7 md:mt-6 md:mx-6 sm:mt-5 sm:mx-5">
            {children}
          </div>
          <div className="mx-6 mb-5 grid grid-cols-6 sm:grid-cols-2 sm:mx-5 mt-5 sm:mt-3">
            <div className="sm:mr-2 sm:mb-2">
              <Button text="Apply" type="add" onclickFunction={applyFunction} />
            </div>
            <div className="ml-5 mr-4 sm:ml-3 sm:mr-0">
              <Button text="Reset" type="delete" onclickFunction={restartFunction} />
            </div>
          </div>
          <div className="h-[0.5px]"></div>
        </div>
        <div className="h-1 rounded-sm"></div>
      </div>
    </>
  );
};

export default FiltersContainer;
