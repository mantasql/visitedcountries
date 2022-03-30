import React, { useEffect, useState } from "react";

const DropDownCountries = () => {
  const [countries, setCountries] = useState([]);

  const URL = "https://restcountries.com/v2/all?fields=name";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
      });
  });

  let optionItems = countries.map((country) => (
    <option value={country.name}>{country.name}</option>
  ));

  return (
    <div className="allContent">
      <select>{optionItems}</select>
    </div>
  );
};

export default DropDownCountries;
