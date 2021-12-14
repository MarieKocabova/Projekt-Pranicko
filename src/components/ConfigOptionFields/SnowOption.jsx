import React from "react";

const SnowOption = ({ description, value, idx }) => {
  return (
    <>
      <div className="field__radio">
        <input type="radio" name="snow" id={`snow-${idx}`} /* checked */ />
        <label htmlFor={`snow-${idx}`}>{description}</label>
      </div>
    </>
  );
};

export default SnowOption;
