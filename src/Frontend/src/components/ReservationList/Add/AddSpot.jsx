import Button from "../../Buttons/Button";
import InputButton from "../../Buttons/InputButton";
import DropDownSelect from "../../Buttons/DropDownSelect";
import useSpot from "../../../hooks/useSpot";

const AddSpot = (props) => {
  const {
    disabledElements,
    currentRecord,
    setCurrentRecord
  } = props;
  const {spots, locations, searchSpotPrice, searchSpotSize, modifyNewSpot } = useSpot();

  const addSpot = () => {
    const newCurrentRecord = {...currentRecord};
    let newSpots = [...currentRecord.NewSpots];
    const currency = currentRecord.Country_Name === "Costa Rica" ? "CRC" : "USD";
    newSpots = [{
      ID_Client: currentRecord.ID,
      Reservation_Date: currentRecord.Reservation_Date,
      Location_Spot: locations[0],
      Price: searchSpotPrice(locations[0], currency),
      Currency: currency
    }, ...newSpots];
    newCurrentRecord.NewSpots = newSpots;
    setCurrentRecord(newCurrentRecord);
  };

  const changeSpot = (type, value) => {
    const newCurrentRecord = modifyNewSpot(type, value, currentRecord);
    setCurrentRecord(newCurrentRecord);
  };

  return (
    <>
      {disabledElements === false && currentRecord.Reservation_Type === 1 && (
        <div className="mt-4 mb-2">
          <Button
            text="Add spot"
            type="add"
            disabled={disabledElements}
            onclickFunction={() => addSpot()}
          />
        </div>
      )}
      {currentRecord.NewSpots &&
       currentRecord.NewSpots.map((spot, index) => (
         <div className="flex" key={index}>
           <div className="bg-gray-100 w-full rounded-sm mt-4">
             <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
               <div className="mt-1 mb-1.5 sm:-mb-4">
                 <DropDownSelect
                   options={locations}
                   disabled={disabledElements}
                   typeChange={["location", index]}
                   onChangeFunction={changeSpot}
                 />
               </div>
               <div className="mt-1 mb-1.5 sm:mt-0">
                 <InputButton
                   type={["size", index]}
                   placeholderText={searchSpotSize(spot.Location_Spot)}
                   disabled={true}
                   onChangeFunction={changeSpot}
                 />
               </div>
             </div>
             <div className="h-1 bg-gray-200 rounded-sm my-2 mx-2"></div>
             <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-1 mb-2">
               <div>
                 <label className="block mt-4 mx-3 text-md font-regular leading-6 text-gray-900">
                   Price
                 </label>
                 <div className="">
                   {currentRecord.Country_Name === "Costa Rica" ? (
                     <div className="mt-1 mb-1">
                       <InputButton
                         type={["price", index]}
                         placeholderText={"₡" + spot.Price.toLocaleString("en-us")}
                         disabled={true}
                       />
                     </div>
                     ) : (
                       <div className="mt-1 mb-1">
                         <InputButton
                           type={["price", index]}
                           placeholderText={"$" + spot.Price.toLocaleString("en-us")}
                           disabled={true}
                         />
                       </div>
                       )}
                 </div>
               </div>
             </div>
           </div>
         </div>
       ))}
    </>
  );
};

export default AddSpot;
