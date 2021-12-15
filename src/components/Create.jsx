import React, { useState } from "react";

import Configurator from "./Configurator";
import Ready from "./Ready";

const Create = () => {
  const [creating, setCreating] = useState(true);
  const [dataToServer, setDataToServer] = useState("");

  const handleSaveConfig = (sendingToServer) => {
    setDataToServer(sendingToServer);

    fetch("https://xmas-api.itgirls.cz/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToServer),
    })
      .then((response) => response.json())
      .then((data) => {
        // v proměnné data má odpověď ze serveru
        // a mohu si s ní dělat, co potřebuji
        console.log(data);
      });

    //setCreating(false);
  };
  console.log(dataToServer);

  if (creating) {
    return <Configurator handleSaveConfig={handleSaveConfig} />;
  }
  return <Ready />;
};

export default Create;
