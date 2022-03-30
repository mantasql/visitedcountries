import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

const countriesList = [];

const DropDownCountries = () => {
  const [countries, setCountries] = useState([]);
  const [selects, setSelects] = useState();

  const URL = "https://restcountries.com/v2/all?fields=name";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
      });
  });

  let optionItems = countries.map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ));

  const addCountry = () => {
    countriesList.push(selects);
    console.log(countriesList);
  };

  return (
    <div className="allContent">
      <h1>{selects}</h1>
      <Form.Select
        style={{ fontSize: 15, width: 300 }}
        value={selects}
        onChange={(e) => setSelects(e.target.value)}
      >
        {optionItems}
      </Form.Select>
      <button onClick={addCountry}>Add Country</button>
      {countriesList.map((country) => (
        <li>{country}</li>
      ))}
    </div>
  );
};

export default DropDownCountries;
