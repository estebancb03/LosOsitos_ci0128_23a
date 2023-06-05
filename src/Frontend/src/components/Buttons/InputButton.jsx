import { useState } from "react";

const InputButton = ({ text, placeholderText, disabled, type, onChangeFunction }) => {
  const [value, setValue] = useState(placeholderText)
  return (
    <>
      {text && placeholderText === "" ? (
        <div className="grid grid-cols-1 sm:my-3">
          <div className="sm:col-span-2">
            <label className="block text-xl font-semibold leading-6 text-gray-900">
              {text}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                value={value}
                placeholder={placeholderText}
                disabled={disabled}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6545e6] sm:text-sm sm:leading-6"
                onChange={e => {
                  type ? onChangeFunction(type, e.target.value) : onChangeFunction;
                  setValue(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        ) : text && placeholderText !== "" ? (
          <div className="grid grid-cols-1 sm:my-3">
            <div className="sm:col-span-2">
              <label className="block text-xl font-semibold leading-6 text-gray-900">
                {text}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  value={placeholderText}
                  placeholder={placeholderText}
                  disabled={disabled}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6545e6] sm:text-sm sm:leading-6"
                  onChange={e => {
                  type ? onChangeFunction(type, e.target.value) : onChangeFunction;
                  setValue(e.target.value);
                }}
                />
              </div>
            </div>
          </div>
        ) : (
        <div className="grid grid-cols-1 my-1 mx-2">
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                type="text"
                value={placeholderText}
                placeholder={placeholderText}
                disabled={disabled}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6545e6] sm:text-sm sm:leading-6"
                onChange={e => {
                  type ? onChangeFunction(type, e.target.value) : onChangeFunction;
                  setValue(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InputButton;