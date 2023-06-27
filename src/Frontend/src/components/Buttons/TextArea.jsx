import { Input } from "antd";
import { useState } from "react";

const TextArea = (props) => {
  const { text, datacy, placeholderText, disabled, type, onChangeFunction } =
    props;
  const [inputValue, setInputValue] = useState(placeholderText);

  const handleChange = (e) => {
    type ? onChangeFunction(type, e.target.value) : onChangeFunction();
    setInputValue(e.target.value);
  };

  return (
    <>
      {text ? (
        <div className="grid grid-cols-1 sm:my-3">
          <div className="sm:col-span-2">
            {text && (
              <label className="block text-xl font-semibold leading-6 text-gray-900">
                {text}
              </label>
            )}
            <div className="mt-2.5">
              <Input.TextArea
                data-cy={datacy}
                value={disabled ? placeholderText : inputValue}
                placeholder={placeholderText}
                disabled={disabled}
                size="large"
                rows={4}
                maxLength={6}
                className="w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 my-1 mx-2">
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input.TextArea
                data-cy={datacy}
                value={disabled ? placeholderText : inputValue}
                placeholder={placeholderText}
                disabled={disabled}
                size="large"
                rows={4}
                maxLength={6}
                className="w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextArea;
