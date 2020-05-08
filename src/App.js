import React from "react";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import RandomQuote from "./components/random-quote/RandomQuote";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <RandomQuote />
    </React.Fragment>
  );
};

export default App;
