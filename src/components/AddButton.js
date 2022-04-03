import React, { useEffect, useState } from "react";

const countriesList = [];

const AddButton = ({ selected, onSelect }) => {
  /*let displayIt = filtered.map((item) => (
    <ul key={item.name}>
      <h2>{item.name}</h2>
      <li>Region: {item.region}</li>
      <li>Area: {item.area}km²</li>
      <li>Population: {item.population}</li>
      <li>Code: {item.alpha3Code}</li>
    </ul>
  ));*/

  const addCountry = () => {};

  return (
    <div>
      <button onClick={() => onSelect(selected)}>Add Country</button>
    </div>
  );
};

export default AddButton;
