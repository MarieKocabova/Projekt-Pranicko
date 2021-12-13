import React from "react";
import { render } from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Configurator from "./components/Configurator";
import Ready from "./components/Ready";
import Pickup from "./components/Pickup";
import Card from "./components/Card";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vytvor-prani" element={<Configurator />} />
      <Route path="/vyzvedni-prani" element={<Pickup />} />
      <Route path="/card/:id" element={<Card />} />
      <Route path="/prani-hotove" element={<Ready />} />
    </Routes>
    {/*
      Tady bude tvůj Vánoční přáníčko :)

      - HTML/CSS podklady máš ve složce /html-vzor
      - vyzobej si ze souborů HTML a CSS pro svoje komponenty
      - aplikace 5 stránek (úvod, vyzvednutí přáníčka, vytvoření přáníčko, zobrazení kódu vytvořeného přáníčka, samotné přáníčko)
      - použij router (musíš si ho nainstalovat)
    */}
  </BrowserRouter>
);

render(<App />, document.querySelector("#app"));
