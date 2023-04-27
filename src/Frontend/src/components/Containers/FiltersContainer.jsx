import Title from "../Title";

const FiltersContainer = ({ children }) => {
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
        <div className="h-[0.5px]"></div>
      </div>
    </>
  );
};

export default FiltersContainer;
