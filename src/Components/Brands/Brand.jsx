/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Brand = ({ brand, index, selectedBrand, setSelectedBrand }) => {
  //   console.log(brand);
  const handleChange = (event) => {
    let isSelected = event.target.checked;
    let value = parseInt(event.target.value);

    if (isSelected) {
      setSelectedBrand([...selectedBrand, value]);
    } else {
      setSelectedBrand((prevState) => {
        return prevState.filter((_id) => {
          return _id !== value;
        });
      });
    }
  };
  //   const checkedInput = (value) => {
  //     return () => selectedBrand.inCludes(value);
  //   };

  return (
    <div>
      <div key={index} className="multi-select">
        <label>{brand?.slug}</label>
        <input
          key={index}
          type="checkbox"
          name="brand"
        //   checked={ selectedBrand.inCludes(brand._id)}
          value={brand._id}
          className="multi-select-input"
          onChange={(event) => handleChange(event, index)}
        />
      </div>
    </div>
  );
};

export default Brand;
