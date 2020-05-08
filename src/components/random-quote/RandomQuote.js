import React, { useState, useEffect } from "react";
import axios from "axios";

import image from "../../assets/image.png";

import "./random-quote.style.css";

const RandomQuote = () => {
  const [quotes, setQuotes] = useState(null);
  const [randomQuotes, setRandomQuotes] = useState(null);

  const fetchQuotes = () => {
    const url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    axios.get(url).then((data) => {
      setQuotes(data.data.quotes);
    });
  };

  const getRandomQuote = () => {
    const randNumb = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randNumb];

    setRandomQuotes(randomQuote);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="random-quote">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <h3 className="quote">{randomQuotes !== null && randomQuotes.quote}</h3>
      <h4 className="author">{randomQuotes !== null && randomQuotes.author}</h4>
      <button className="btn" onClick={getRandomQuote}>
        ~Get Famous Quote~
      </button>
    </div>
  );
};

export default RandomQuote;
