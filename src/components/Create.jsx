import React, { useState } from "react";

import Configurator from "./Configurator";
import Ready from "./Ready";

const Create = () => {
  const [creating, setCreating] = useState(true);

  if (creating) {
    return <Configurator />;
  }
  return <Ready />;
};

export default Create;
