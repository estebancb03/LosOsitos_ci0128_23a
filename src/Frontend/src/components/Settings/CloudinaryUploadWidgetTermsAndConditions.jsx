import React from "react";

const CloudinaryUploadWidget = (props) => {
  const myWidget = () =>
    window.cloudinary.openUploadWidget(
      {
        cloudName: "asojunquillal",
        uploadPreset: "step5preset",
        sources: ["local", "url"],
        multiple: false,
        singleUploadAutoClose: false,
        folder: "termsAndConditions",
        clientAllowedFormats: ["jpg", "jpeg", "png", "pdf"],
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          props.setImage(result.info.url);
        }
      }
    );

  return (
    <button
      id="upload_widget"
      className="w-full h-full bg-[#004e98] uppercase tracking-wider rounded-sm hover:bg-[#758bfd] opacity-100 top-[-400px] 
        transition-all ease-in duration-300 p-2 text-white"
      onClick={myWidget}
    >
      Upload
    </button>
  );
};

export default CloudinaryUploadWidget;
