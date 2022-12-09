import DropDownCountries from "./components/DropDownCountries";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [myCountries, setMyCountries] = useState([]);

  const URL =
    "https://restcountries.com/v2/all?fields=name,region,area,population,alpha3Code";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
      });
  });

  //let filtered = countries.filter((item) => item.name === data);
  const selectCountryz = (name) => {
    let filtered = countries.filter((item) => item.name === name);
    setMyCountries(myCountries.concat(filtered));
  };

  const selectCountry = (name) => {
    let filtered = countries.filter((item) => item.name === name);
    setMyCountries(myCountries.concat(filtered));
  };

  return (
    <div>
      <style type="text/css">
        {`
          body {
            background-color: black;
            color: white;
          }
          li {
            list-style: none;
          }
          `}
      </style>
      <h2>Select your country</h2>
      <DropDownCountries countries={countries} onSelect={selectCountry} />
      {myCountries.map((item) => (
        <ListGroup key={item.name}>
          <h2>{item.name}</h2>
          <ListGroup.Item>Region: {item.region}</ListGroup.Item>
          <ListGroup.Item>Area: {item.area}km²</ListGroup.Item>
          <ListGroup.Item>Population: {item.population}</ListGroup.Item>
          <ListGroup.Item>Code: {item.alpha3Code}</ListGroup.Item>
        </ListGroup>
      ))}
    </div>
  );
}

export default App;
