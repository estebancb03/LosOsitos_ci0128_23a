import Title from "../Title";
import Button from "../Buttons/Button";

const FiltersContainer = ({ applyFunction, restartFunction, children }) => {
  return (
    <>
      <div className="mt-5 mb-2 rounded-sm ring-4 ring-[#21295c]">
        <div className="h-[25px]"></div>
        <div className="grid grid-cols-1 mx-7 md:mx-6 sm:mx-5">
            <Title name="Filters" />
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 my-7 mx-7 md:my-6 md:mx-6 sm:my-5 sm:mx-5">
          {children}
        </div>
        <div className="mx-6 mb-5 grid grid-cols-2 sm:grid-cols-1 sm:mx-5">
          <div className="mr-3 sm:mr-0 sm:mb-2">
            <Button text="Apply" type="add" onclickFunction={applyFunction} />
          </div>
          <div className="ml-3 sm:ml-0 sm:mt-2">
            <Button text="Restart" type="delete" onclickFunction={restartFunction} />
          </div>
        </div>
        <div className="h-[0.5px]"></div>
      </div>
    </>
  );
};

export default FiltersContainer;
