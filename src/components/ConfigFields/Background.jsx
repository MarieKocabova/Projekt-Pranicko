import React from "react";

const Background = ({ description, value }) => {
  return (
    <div className="field__swatch">
      <input type="radio" name="background" id={`background-${value}`} /* checked */ />
      <label htmlFor={`background-${value}`} className={`swatch--${value}`} data-description={description}></label>
    </div>
  );
};

export default Background;
