import { useState } from "react";
import Title from "../Title";
import ReactDOM from 'react-dom';
// Import FilePond Drag&Drop
import { FilePond, registerPlugin } from 'react-filepond';
// Import Checkbox
import { Checkbox } from 'antd';

const ReservationStep6Sinpe = () => {
  const [files, setFiles] = useState([])
  const [checkbox, setCheckbox] = useState(false)
  console.log(files)
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