import React from "react";

import Header from "./Header";
import Title from "./Title";
import Background from "./ConfigFields/Background";
import Colors from "./ConfigFields/Colors";
import Covers from "./ConfigFields/Covers";
import configuration from "../configuration.js";

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
              {/* <!-- pozadí stránky	--> */}
              <div className="field">
                <label className="field__label">Pozadí stránky</label>

                <div className="field__swatch-group field__swatch-group--round">
                  {configuration.backgrounds.map((ele, idx) => (
                    <Background description={ele.description} value={ele.value} key={idx} />
                  ))}
                </div>
              </div>

              {/* <!-- barva přáníčka	--> */}
              <div className="field">
                <label className="field__label">Barva přáníčka</label>

                <div className="field__swatch-group field__swatch-group--round">
                  {configuration.colors.map((ele, idx) => (
                    <Colors description={ele.description} value={ele.value} key={idx} />
                  ))}
                </div>
              </div>

              {/* <!-- obrázek na obálce	--> */}
              <div className="field">
                <label className="field__label">Obrázek na obálce</label>

                <div className="field__swatch-group field__swatch-group--big">
                  {configuration.covers.map((ele, idx) => (
                    <Covers description={ele.description} value={ele.value} key={idx} />
                  ))}
                </div>
              </div>

              {/* <!-- intenzita sněžení na pozadí	--> */}
              <div className="field">
                <label className="field__label ">Sníh na pozadí</label>

                <div className="field__radio-group">
                  <div className="field__radio">
                    <input type="radio" name="snow" id="snow-0" /* checked */ />
                    <label htmlFor="snow-0">bez sněhu</label>
                  </div>

                  <div className="field__radio">
                    <input type="radio" name="snow" id="snow-1" />
                    <label htmlFor="snow-1">málo</label>
                  </div>

                  <div className="field__radio">
                    <input type="radio" name="snow" id="snow-2" />
                    <label htmlFor="snow-2">hodně</label>
                  </div>
                </div>
              </div>

              {/* <!-- hudba	--> */}
              <div className="field">
                <label className="field__label">Hudba</label>

                <div className="field__radio-group">
                  <div className="field__radio">
                    <input type="radio" name="music" id="music-jingle-bells" /* checked */ />
                    <label htmlFor="music-jingle-bells">Rolničky, roličky</label>
                  </div>

                  <div className="field__radio">
                    <input type="radio" name="music" id="music-silent-night" />
                    <label htmlFor="music-silent-night">Tichá noc</label>
                  </div>

                  <div className="field__radio">
                    <input type="radio" name="music" id="music-god-rest" />
                    <label htmlFor="music-god-rest">Pokoj Vám</label>
                  </div>
                </div>
              </div>

              {/* <!-- text	--> */}
              <div className="field">
                <label className="field__label" htmlFor="text">
                  Text uvnitř přáníčka
                </label>
                <textarea className="field__input" name="text" id="text" rows="3" maxLength="100" autoComplete="off"></textarea>
                <p className="field__description">
                  Zbývá <strong>37</strong>/100 znaků.
                </p>
              </div>

              {/* <!-- odesílatel	--> */}
              <div className="field">
                <label className="field__label" htmlFor="sender">
                  Odesílatel (podpis)
                </label>
                <input className="field__input" type="text" name="sender" id="sender" rows="3" maxLength="20" autoComplete="off" />
              </div>

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
