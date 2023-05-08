import { useState, useEffect } from "react";
import Title from "../Title";
import Button from "../Buttons/Button";
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

const saveBase64 = (setFilesBase64, files, filesBase64) => {
  if (files.length != 0) {
    setFilesBase64(files[0].getFileEncodeBase64String());
    console.log(filesBase64);
  }
};

const updateReservationData = () => {
  console.log("a");
};

const ReservationStep6Sinpe = ({
  windows,
  setWindows,
  reservationData,
  setReservationData,
}) => {
  const [files, setFiles] = useState([]);
  const [filesBase64, setFilesBase64] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  useEffect(() => {
    saveBase64(setFilesBase64, files, filesBase64);
  });

  return (
    <>
      {windows.Step6 && (
        <div>
          <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">Upload payment proof picture</h2>
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
              console.log(checkbox);
            }}
          >
            Agree with <a href="./termsconditions.jpeg" target="_blank">terms and conditions</a>
          </Checkbox>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4">
              <Button
                text="Back"
                onclickFunction={(e) => {
                  const newWindows = { ...windows };
                  newWindows.Step2 = true;
                  newWindows.Step3 = false;
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

export default ReservationStep6Sinpe;
