import React, { useState, useCallback, useMemo } from "react";
// import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

console.log("SimpleMDE", SimpleMDE);
const SimpleMDECustom = ({ value, onChange }) => {
 
  // const extraKeys = useMemo(() => {
  //   return {
  //     Up: function (cm) {
  //       cm.replaceSelection(" surprise. ");
  //     },
  //     Down: function (cm) {
  //       cm.replaceSelection(" surprise again! ");
  //     },
  //   };
  // }, []);

  const customImgFunction = (e) => {
    console.log(1, e);
  };
  const options = {
    // autofocus: true,
    spellChecker: false,
    toolbar: [
      "bold",
      "italic",
      "strikethrough",
      "|",
      "heading",
      "heading-smaller",
      "heading-bigger",
      "|",
      "code",
      "quote",
      "|",
      "unordered-list",
      "ordered-list",
      "|",
      "link",
      {
        name: "image",
        action: customImgFunction,
        className: "fa fa-picture-o",
        title: "Insert image",
      },
      "|",
      "preview",
      "side-by-side",
      "fullscreen",
      "|",
      {
        name: "custom",
        action: function customFunction(editor) {
          // Custom function logic here
          alert("Custom button clicked!");
        },
        className: "fa fa-star",
        title: "Custom Button",
      },
    ],
  };

  return <SimpleMDE value={value} onChange={onChange} options={options} />;
};

export default SimpleMDECustom;
