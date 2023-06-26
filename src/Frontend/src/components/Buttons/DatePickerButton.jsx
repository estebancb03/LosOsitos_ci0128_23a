import dayjs from 'dayjs';
import moment from 'moment';
import { useState } from "react";
import { DatePicker } from 'antd';
import { formatDateMMDDYYYY, addZerosToDate } from "../../helpers/formatDate";

const DatePickerButton = (props) => {
  const {
    datacy,
    text,
    typeClass,
    type,
    selectedDate,
    disabled,
    onChangeFunction
  } = props;
  const dateFormat = 'DD/MM/YYYY';
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
    onChangeFunction(type, formatDateMMDDYYYY(new Date(date)));
  };

  return (
    <>
      <div className='grid grid-cols-1'>
        <div className='sm:col-span-2'>

        {typeClass && typeClass === "1" ? (
          <div className="mt-4 sm:ml-3">
            <label className="block mb-2 text-xl font-semibold leading-6 text-gray-900">
              {text}
            </label>
            <DatePicker
              data-cy={datacy} 
              defaultValue={dayjs(startDate)} 
              format={dateFormat}
              disabled={disabled}
              size='large'
              className='w-full'
              onChange={handleChange}
            />
          </div>
        ) : typeClass && typeClass === "2" ? (
          <div className="mt-4 ml-2">
            <label className="block mb-2 text-xl font-semibold leading-6 text-gray-900">
              {text}
            </label>
            <DatePicker
              data-cy={datacy} 
              defaultValue={dayjs(addZerosToDate(formatDateMMDDYYYY(selectedDate)), dateFormat)} 
              format={dateFormat}
              disabled={disabled}
              size='large'
              className='w-full'
              onChange={handleChange}
            />
          </div>
        ) : typeClass && typeClass === "3" ? (
          <div className="mt-4 sm:ml-3">
            <label className="block mb-2 text-xl font-semibold leading-6 text-gray-900">
              {text}
            </label>
            <DatePicker
              data-cy={datacy} 
              defaultValue={dayjs(addZerosToDate(formatDateMMDDYYYY(selectedDate)))} 
              format={dateFormat}
              disabled={disabled}
              size='large'
              className='w-full'
              onChange={handleChange}
            />
          </div>
        ) : (
          <div className="">
            <label className="block mb-2 text-xl font-semibold leading-6 text-gray-900">
              {text}
            </label>
            <DatePicker
              data-cy={datacy} 
              defaultValue={dayjs(startDate)} 
              format={dateFormat}
              disabled={disabled}
              size='large'
              className='w-full'
              onChange={handleChange}
            />
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default DatePickerButton;