import DropDownCountries from "./components/DropDownCountries";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [myCountries, setMyCountries] = useState([]);
  const [countriesList, setCountriesList] = useState([]);

  const URL =
    "https://restcountries.com/v2/all?fields=name,region,area,population,alpha3Code";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        setCountries(result);
      });
  }, []);

  const selectCountry = (name) => {
    let filtered = countries.filter((item) => item.name === name);
    setMyCountries(filtered);
  };

  //post to database
  const addToDb = () => {
    console.log("posting");
    let countryName;
    let countryRegion;
    let countryArea;
    let countryPopulation;
    let alpha3Code;

    myCountries.map((item) => {
      countryName = item.name;
      countryRegion = item.region;
      countryArea = item.area;
      countryPopulation = item.population;
      alpha3Code = item.alpha3Code;
    });
    console.log(countryName);
    axios.post("http://localhost:3001/insert", {
      countryName: countryName,
      countryRegion: countryRegion,
      countryArea: countryArea,
      countryPopulation: countryPopulation,
      alpha3Code: alpha3Code,
    });
  };

  //get from database
  useEffect(() => {
    axios.get("http://localhost:3001/read").then((response) => {
      setCountriesList(response.data);
    });
  });

  return (
    <div>
      <style type="text/css">
        {`
          body {
            background-color: black;
            color: white;
          }
          `}
      </style>
      <h2>Select your country</h2>
      <DropDownCountries
        countries={countries}
        onSelect={selectCountry}
        onClick={addToDb}
        display={countriesList}
      />
    </div>
  );
}

export default App;
