import { useState, useEffect } from "react";
import Title from "../Title";
import Button from "../Buttons/Button";
import AxiosClient from "../../config/AxiosClient";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the plugin code
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
// Register the plugin
registerPlugin(FilePondPluginFileEncode);

// Import Checkbox
import { Checkbox } from "antd";

const ReservationStep6 = ({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) => {
  const [files, setFiles] = useState([]);
  const [filesBase64, setFilesBase64] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const saveBase64 = (setFilesBase64, files, filesBase64) => {
    if (files.length != 0) {
      setFilesBase64(files[0].getFileEncodeBase64String());
    }
  };

  const updateReservationData = () => {
    if (checkbox && filesBase64 != "") {
      const newReservationData = { ...reservationData };
      const newWindows = { ...windows };
      newWindows.Step6 = false;
      newWindows.Step7 = true;
      newReservationData.Payment_Proof = filesBase64;
      newReservationData.QRData = {
        data: newReservationData.ID + newReservationData.Reservation_Date,
        mail: newReservationData.Email,
        text: reservationData
      };
      setReservationData(newReservationData);
      setWindows(newWindows);
      sendQRData(newReservationData.QRData);
      console.log(newReservationData.Payment_Proof);
    } else {
      alert(
        "Check if you uploaded the payment proof or if you have already accepter the terms and conditions"
      );
    }
  };

  // Method to send data to be emailed
  const sendQRData = async (value) => {
    try {
      console.log(value);
      const data = value;
      const url = "/mail";
      await AxiosClient.post(url, {
        data,
      });
    } catch (exception) {
      console.log(exception);
    }
  };

  useEffect(() => {
    saveBase64(setFilesBase64, files, filesBase64);
  });

  return (
    <>
      {windows.Step6 && (
        <div>
          <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">
            Upload payment proof picture
          </h2>
          <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={false}
            maxFiles={1}
            name="files"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          <Checkbox
            onChange={() => {
              setCheckbox(!checkbox);
            }}
          >
            Agree with{" "}
            <a href="./termsconditions.jpeg" target="_blank">
              terms and conditions
            </a>
          </Checkbox>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4">
            <Button
              text="Back"
              onclickFunction={(e) => {
                const newWindows = { ...windows };
                newWindows.Step5 = true;
                newWindows.Step6 = false;
                setWindows(newWindows);
              }}
            />
            <Button
              text="Next"
              onclickFunction={() => {
                updateReservationData();
              }}
            />
            <div className="mb-1"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReservationStep6;
