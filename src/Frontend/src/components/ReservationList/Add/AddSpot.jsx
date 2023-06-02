import Button from "../../Buttons/Button";
import InputButton from "../../Buttons/InputButton";
import DropDownSelect from "../../Buttons/DropDownSelect";
import useSpot from "../../../hooks/useSpot";

const AddSpot = (props) => {
  // Props
  const {
    disabledElements,
    currentRecord,
    setCurrentRecord
  } = props;
  // Spots hook
  const {spots} = useSpot();

  // Method that adds a new spot
  const addSpot = () => {
    const newCurrentRecord = {...currentRecord};
    const newSpots = [...newCurrentRecord.NewSpots];

    newCurrentRecord.NewSpots = newSpots;
    setCurrentRecord(newCurrentRecord);
  };

  return (
    <>
      {disabledElements === false && (
        <div className="mt-4 mb-2">
          <Button
            text="Add spot"
            type="add"
            disabled={disabledElements}
            onclickFunction={() => {}}
          />
        </div>
      )}
      {currentRecord.NewSpots &&
       currentRecord.NewSpots.map((spot, index) => (
         <div className="bg-gray-100 w-full rounded-sm mt-4" key={index}>

         </div>
       ))}
    </>
  );
};

export default AddSpot;
