import React from "react";

const ColorsOption = ({ description, value }) => {
  return (
    <div className="field__swatch">
      <input type="radio" name="color" id={`color-${value}`} /* checked */ />
      <label htmlFor={`color-${value}`} className={`swatch--${value}`} data-description={description}></label>
    </div>
  );
};

export default ColorsOption;
