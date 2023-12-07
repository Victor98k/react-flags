import React from "react";
import { useState } from "react";

const CountryCard = ({ country }) => {
  const { name, capital, population, flags } = country;
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <section className="flags-container">
        <img
          src={flags.png}
          alt={"countrys flag"}
          onClick={toggleInfo}
          style={{ cursor: "pointer" }}
        />

        {showInfo && (
          <p>
            Country: {name.common}
            <br />
            Capital: {capital}
            <br />
            Population: {population}
          </p>
        )}
      </section>
    </>
  );
};

export default CountryCard;
