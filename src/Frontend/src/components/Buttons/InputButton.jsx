import { Input } from 'antd';
import { useState } from "react";

const InputButton = (props) => {
  const {
    text,
    datacy,
    placeholderText,
    disabled,
    type,
    onChangeFunction
  } = props;
  const [inputValue, setInputValue] = useState(placeholderText);

  const handleChange = (e) => {
    type ? onChangeFunction(type, e.target.value)
         : onChangeFunction();
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className='grid grid-cols-1 sm:my-3'>
        <div className='sm:col-span-2'>
          {text && (
            <label className="block text-xl font-semibold leading-6 text-gray-900">
              {text}
            </label>
          )}
          <div className='mt-2.5'>
            <Input
              data-cy={datacy}
              value={inputValue}
              disabled={disabled}
              placeholder={placeholderText}
              size='large' 
              className='w-full'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InputButton;
