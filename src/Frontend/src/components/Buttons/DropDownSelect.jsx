//import { useState } from "react";
//
//const DropDownSelect = ({
//  text,
//  disabled,
//  selectedOption,
//  options,
//  typeChange,
//  onChangeFunction,
//}) => {
//  // State that manages the current value of the component
//  const [currentOption, setCurrentOption] = useState(selectedOption);
//  return (
//    <>
//      {text ? (
//        <div className="sm:col-span-3">
//          <label className="block text-xl font-semibold leading-6 text-gray-900">
//            {text}
//          </label>
//          <div className="mt-2">
//            <select
//              onChange={(e) => {
//                setCurrentOption(e.target.value);
//                onChangeFunction(typeChange, e.target.value);
//              }}
//              selected={currentOption}
//              value={currentOption}
//              disabled={disabled}
//              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#004e98] sm:text-sm sm:leading-6 overflow-y-auto"
//            >
//              {options.map((option, index) => (
//                <option key={index} value={option}>
//                  {option}
//                </option>
//              ))}
//            </select>
//          </div>
//        </div>
//      ) : (
//        <div className="sm:col-span-3">
//          <div className="mt-3.5 mx-2">
//            <select
//              onChange={(e) => {
//                setCurrentOption(e.target.value);
//                onChangeFunction(typeChange, e.target.value);
//              }}
//              selected={currentOption}
//              value={currentOption}
//              disabled={disabled}
//              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#004e98] sm:text-sm sm:leading-6 overflow-y-auto"
//            >
//              {options.map((option, index) => (
//                <option key={index} value={option}>
//                  {option}
//                </option>
//              ))}
//            </select>
//          </div>
//        </div>
//      )}
//    </>
//  );
//};
//
//export default DropDownSelect;

import { useState } from "react";

const DropDownSelect = ({
  text,
  disabled,
  selectedOption,
  options,
  typeChange,
  onChangeFunction,
}) => {
  const [currentOption, setCurrentOption] = useState(selectedOption);

  const shouldShowScroll = options.length > 10; // Verificar si hay más de 10 opciones

  return (
    <>
    {text ? (
      <div className="sm:col-span-3">
        <label className="block text-xl font-semibold leading-6 text-gray-900">
          {text}
        </label>
        <div className="mt-2">
          <div
            className={`overflow-y-auto ${
            open ? "max-h-10" : "max-h-20"
          } `}
            >
            <select
              onChange={(e) => {
              setCurrentOption(e.target.value);
              onChangeFunction(typeChange, e.target.value);
            }}
              selected={currentOption}
              value={currentOption}
              disabled={disabled}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#004e98] sm:text-sm sm:leading-6"
              >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
                ))}
            </select>
          </div>
        </div>
      </div>
      ) : (
        <div className="sm:col-span-3">
          <div className="mt-3.5 mx-2">
            <div
              className={`relative ${shouldShowScroll ? "max-h-60 overflow-y-auto" : ""}`}
              >
              <select
                onChange={(e) => {
                setCurrentOption(e.target.value);
                onChangeFunction(typeChange, e.target.value);
              }}
                selected={currentOption}
                value={currentOption}
                disabled={disabled}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#004e98] sm:text-sm sm:leading-6"
                >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        )}
    </>
    );
};

export default DropDownSelect;
