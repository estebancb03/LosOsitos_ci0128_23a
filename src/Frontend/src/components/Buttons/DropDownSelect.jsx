import { useState } from "react";

const DropDownSelect = ({ text, disabled, options }) => {
  return (
    <>
      <div className="sm:col-span-3">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {text}
        </label>
        <div className="mt-2">
          <select
            disabled={disabled}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            {options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default DropDownSelect;
