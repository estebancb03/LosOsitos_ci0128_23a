import { Select } from "antd";

const DropDownSelect = (props) => {
  const { 
    text,
    disabled,
    datacy,
    selectedOption,
    options,
    typeChange,
    onChangeFunction
  } = props;

  const handleChange = (value) => {
    onChangeFunction(typeChange, value);
  };

  return (
    <>
      <div className="sm:col-span-3">
        {text && (
          <div>
            <label className="block text-xl font-semibold leading-6 text-gray-900">
              {text}
            </label>
            <div className="mt-2"></div>
          </div>
        )}
        <Select 
          data-cy={datacy}
          className="w-full h-full text-xl" 
          size="large"
          disabled={disabled}
          defaultValue={
            selectedOption ? {label: selectedOption, value: selectedOption}  :
            {label: options[0], value: options[0]}
          }
          options={options.map((option) => {
            return {
              label: option,
              value: option
            };
          })}
          onChange={handleChange} 
        />
      </div>
    </>
  );
};

export default DropDownSelect;
