import React, { useState } from "react";
import { render } from "react-dom";
import { TagsInput } from "react-tag-input-component";

const COUNTRIES = ["vietnam"];
const suggestions = COUNTRIES.map((country) => {
  return {
    id: country,
    text: country,
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const Tags = ({value, onChange}) => {
  const [tags, setTags] = React.useState(["tags"]);

  return (
    <div className="app">
      <div>
        <TagsInput
          value={value}
          onChange={onChange}
          name="tags"
          placeHolder="Add a tag"
        />

        {/* <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
        /> */}
      </div>
    </div>
  );
};

export default Tags;
