import React, { useEffect, useState } from "react";
import AddButton from "./AddButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

const DropDownCountries = () => {
  const [countries, setCountries] = useState([]);
  const [selects, setSelects] = useState();

  const URL =
    "https://restcountries.com/v2/all?fields=name,region,area,population,alpha3Code";

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
      <AddButton selected={selects} />
    </div>
  );
};

export default DropDownCountries;
