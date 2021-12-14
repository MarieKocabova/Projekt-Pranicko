import React from "react";

import configuration from "../configuration.js";

import Header from "./Header";
import Title from "./Title";
import Background from "./ConfigFields/Background";
import Colors from "./ConfigFields/Colors";
import Covers from "./ConfigFields/Covers";
import Snow from "./ConfigFields/Snow";
import Music from "./ConfigFields/Music.jsx";
import Text from "./ConfigFields/Text.jsx";
import Sender from "./ConfigFields/Sender.jsx";

const Configurator = () => {
  return (
    <>
      <Header />
      <Title title={"Vytvořit přáníčko"} />
      {console.log(configuration.backgrounds[0].description)}
      {console.log(configuration.backgrounds[0].value)}
      <main className="content">
        <div className="box">
          <div className="box__inside">
            <form className="configurator">
              <Background configuration={configuration} />
              <Colors configuration={configuration} />
              <Covers configuration={configuration} />
              <Snow configuration={configuration} />
              <Music configuration={configuration} />
              <Text />
              <Sender />

              {/* <!-- tlačítko pro odeslání --> */}
              <button type="submit" className="button button--big mt-30">
                Uložit přáníčko
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Configurator;
