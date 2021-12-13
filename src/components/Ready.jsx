import React from "react";

import Header from "./Header";
import Title from "./Title";

const Ready = () => {
  return (
    <>
      <Header />
      <Title title={"Přáníčko je připravené"} />

      <main className="content">
        <div className="pickup">
          <p className="pickup__label">Přímý odkaz na přáníčko</p>

          <div className="box shadow mb-30">
            <div className="box__inside pt-0 pb-0">
              <a href="https://tvuj-web.cz/card/abc123" className="pickup__url">
                https://tvuj-web.cz/card/abc123
              </a>
              <p className="pickup__description">Tento odkaz pošli emailem, přes messenger nebo ho dej na sociální sítě. Po kliknutí na odkaz se zobrazí tvoje přáníčko.</p>
            </div>
          </div>

          <p className="pickup__label">Kód tvého přáníčka</p>

          <div className="box shadow mb-30">
            <div className="box__inside pt-0 pb-0">
              <div className="pickup__code">ABC123</div>
              <p className="pickup__description">S tímto kódem si kdokoliv může vyzvednout tvoje uložené přáníčko. Hodí se, když chceš přáníčko poslat třeba SMSkou a nechceš opisovat celou adresu.</p>
            </div>
          </div>

          <button className="button button--big">Vytvořit další přáníčko</button>
        </div>
      </main>
    </>
  );
};

export default Ready;
