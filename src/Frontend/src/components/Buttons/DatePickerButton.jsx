import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDateMMDDYYYY } from "../../helpers/formatDate";

const DatePickerButton = ({ text, typeClass, type, onChangeFunction }) => {
  // State that controls the date
  const [startDate, setStartDate] = useState();

  return (
    <div className="grid grid-cols-1">
      <div className="sm:col-span-2">
        {typeClass && typeClass === "1" ? (
          <div className="mt-4 sm:ml-3">
            <label className="block mb-2 text-xl font-semibold leading-6 text-gray-900">
              {text}
            </label>
            <DatePicker
              onChange={(date) => {
                setStartDate(date);
                onChangeFunction(type, formatDateMMDDYYYY(date));
              }}
              selected={startDate}
              dateFormat="dd/MM/yyyy"
              className="block w-[100%] md:w-[93%] sm:w-[105%] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6545e6] sm:text-sm sm:leading-6"
            />
          </div>
        ) : (
          <div className="ml-3.5 mt-4 sm:mt-1.5 sm:ml-0">
            <label className="block mb-2 text-xl font-semibold leading-6 text-gray-900">
              {text}
            </label>
            <DatePicker
              onChange={(date) => {
                setStartDate(date);
                onChangeFunction(type, formatDateMMDDYYYY(date));
              }}
              selected={startDate}
              dateFormat="dd/MM/yyyy"
              className="block w-[97%] md:w-[93%] sm:w-[96%] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6545e6] sm:text-sm sm:leading-6"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePickerButton;
