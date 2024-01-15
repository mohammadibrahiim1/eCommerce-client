/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const PriceRangeSlider = ({ handleSliderChange, priceRange }) => {
  return (
    <div>
      <div>
        <input type="range" onInput={handleSliderChange} />
        <label>Price Range : {priceRange}</label>
        <div style={{ display: "flex", justifyContent: "space-between" }}></div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
