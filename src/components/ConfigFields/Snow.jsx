import React from "react";

import SnowOption from "../ConfigOptionFields/SnowOption";

const Snow = ({ configuration }) => {
  return (
    <div className="field">
      <label className="field__label ">Sníh na pozadí</label>
      <div className="field__radio-group">
        {configuration.snow.map((ele, idx) => (
          <SnowOption description={ele.description} value={ele.value} key={idx} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Snow;
