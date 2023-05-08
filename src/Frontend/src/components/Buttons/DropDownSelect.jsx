import { useState } from "react";

const DropDownSelect = ({
  text,
  disabled,
  selectedOption,
  options,
  typeChange,
  onChangeFunction,
}) => {
  // State that manages the current value of the component
  const [currentOption, setCurrentOption] = useState(selectedOption);
  return (
    <>
      {text ? (
        <div className="sm:col-span-3">
          <label className="block text-xl font-semibold leading-6 text-gray-900">
            {text}
          </label>
          <div className="mt-2">
            <select
              onChange={(e) => {
                setCurrentOption(e.target.value);
                onChangeFunction(typeChange, e.target.value);
              }}
              selected={currentOption}
              value={currentOption}
              disabled={disabled}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6545e6] sm:text-sm sm:leading-6"
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div className="sm:col-span-3">
          <div className="mt-3.5 mx-2">
            <select
              onChange={(e) => {
                setCurrentOption(e.target.value);
                onChangeFunction(typeChange, e.target.value);
              }}
              selected={currentOption}
              value={currentOption}
              disabled={disabled}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6545e6] sm:text-sm sm:leading-6"
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default DropDownSelect;
