import React from "react";

const MusicOption = ({ description, value }) => {
  return (
    <>
      <div className="field__radio">
        <input type="radio" name="music" id={`music-${value}`} /* checked */ />
        <label htmlFor={`music-${value}`}>{description}</label>
      </div>
    </>
  );
};

export default MusicOption;
