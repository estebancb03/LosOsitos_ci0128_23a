import { useState, useEffect } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidgetTermsAndConditions";
import useTermsAndConditions from "../../hooks/useTermsAndConditions";

const TermsAndConditions = () => {
  const [image, setImage] = useState("");

  const { updateTermsAndConditionsLink } = useTermsAndConditions();

  useEffect(() => {
    updateTermsAndConditionsLink(image);
  }, [image]);
  return (
    <>
      <h2 className="pt-8 pb-4 pl-2 font-semibold text-2xl">
        Upload a new image/file for the Terms and Conditions
      </h2>
      <div className="grid grid-cols-5 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4 flex-justifiy">
        <CloudinaryUploadWidget setImage={(imageProp) => setImage(imageProp)} />
      </div>
      <br></br>
    </>
  );
};

export default TermsAndConditions;
