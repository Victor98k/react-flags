// App.js
import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import CountryCard from "./CountryCard";
import "./index.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Players from "./Players";

const App = () => {
  const [selectedContinent, setSelectedContinent] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedContinent) {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${selectedContinent}`
        );
        const data = await response.json();
        setCountries(data);
      }
    };

    fetchData();
  }, [selectedContinent]);

  return (
    <div>
      <Navbar />
      <Header />
      <Players />

      <Dropdown onSelectContinent={setSelectedContinent} />
      <div>
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default App;
