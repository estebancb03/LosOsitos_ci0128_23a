import { useState } from "react";
import Title from "../Title";
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the plugin code
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
// Register the plugin
registerPlugin(FilePondPluginFileEncode);

// Import Checkbox
import { Checkbox } from 'antd';

const ReservationStep6Sinpe = () => {
  const [files, setFiles] = useState([])
  const [filesBase64, setFilesBase64] = useState()
  const [checkbox, setCheckbox] = useState(false)
  if (files.length != 0){
    setFilesBase64(files[0].getFileEncodeBase64String())
}
  return (
    <>
        <Title name="Upload Payment Proof Picture" />
        <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={false}
        maxFiles={1}
        name="files" 
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
        <Checkbox onChange={() => {setCheckbox(!checkbox)
          console.log(checkbox)}}>Agree with <a href="./javi.pdf">terms and conditions</a></Checkbox>
    </>
  );
};

export default ReservationStep6Sinpe;