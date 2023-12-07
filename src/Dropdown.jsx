import React from "react";
import "./index.css";

const Dropdown = ({ onSelectContinent }) => {
  const continents = ["Africa", "Asia", "Europe"];

  const handleChange = (e) => {
    const selectedContinent = e.target.value;
    onSelectContinent(selectedContinent);
  };

  return (
    <>
      <div className="dropdown-container">
        <div label>
          <label className="label" htmlFor="chooseContinent">
            Choose a continent
          </label>
          <div className="custom-select">
            <select id="chooseContinent" onChange={handleChange}>
              <option value="">Select</option>
              {continents.map((continent, index) => (
                <option key={index} value={continent}>
                  {continent}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
