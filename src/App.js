import DropDownCountries from "./components/DropDownCountries";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import AddButton from "./components/AddButton";
import * as ReactDOM from "react-dom";

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
      <DropDownCountries countries={countries} onSelect={selectCountry} />
      {myCountries.map((item) => (
        <ul key={item.name}>
          <h2>{item.name}</h2>
          <li>Region: {item.region}</li>
          <li>Area: {item.area}km²</li>
          <li>Population: {item.population}</li>
          <li>Code: {item.alpha3Code}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
