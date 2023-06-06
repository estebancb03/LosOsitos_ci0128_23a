import InputButton from "../../Buttons/InputButton";

const ShowFee = (props) => {
  const {
    text,
    fees
  } = props;
  
  return (
    <>
      <div className="bg-gray-300 w-full rounded-sm my-2">
        <div className="mt-4">
          <label className="block mx-3 text-lg font-semibold leading-6 text-gray-900">
            <br/>
            {text}
          </label>
          <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
            <div className="mt-1 mb-5">
              <InputButton
                type={"Fee"}
                placeholderText={"₡" + fees[0].toLocaleString("en-us")}
                disabled={true}
              />
            </div>
            <div className="mt-1 mb-5">
              <InputButton
                type={"Fee"}
                placeholderText={"$" + fees[1].toFixed(2).toLocaleString("en-us")}
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowFee;
