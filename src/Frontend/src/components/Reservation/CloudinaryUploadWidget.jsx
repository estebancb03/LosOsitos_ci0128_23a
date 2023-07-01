import React, { Component } from "react";

const CloudinaryUploadWidget = (props) => {
  const myWidget = () =>
    window.cloudinary.openUploadWidget(
      {
        cloudName: "asojunquillal",
        uploadPreset: "step5preset",
        sources: ["local", "url"],
        multiple: false,
        singleUploadAutoClose: false,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          props.setImage(result.info.url);
        }
      }
    );

  return (
    <div className="text-gray-200 w-full h-10">
      <button
        data-cy="upload_widget"
        className="w-full h-full bg-[#004e98]  uppercase tracking-wider rounded-lg hover:bg-[#4E76D3] opacity-100 top-[-400px] 
        transition-all ease-in duration-300"
        onClick={myWidget}
      >
        Upload
      </button>
    </div>
  );
};

export default CloudinaryUploadWidget;
