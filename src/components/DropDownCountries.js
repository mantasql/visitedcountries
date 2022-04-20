import React, { useEffect, useState } from "react";
import AddButton from "./AddButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import ShowButton from "./ShowButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DropDownCountries = ({ countries, onSelect, onClick, display }) => {
  const [selects, setSelects] = useState();

  let optionItems = countries.map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ));
  useEffect(() => {
    console.log(selects);
    onSelect(selects);
  }, [selects]);
  return (
    <div className="allContent">
      <div className="d-flex justify-content-center">
        <Form.Select
          style={{ fontSize: 15, width: 350, marginBottom: 15 }}
          value={selects}
          onChange={(e) => {
            setSelects(e.target.value);
          }}
        >
          {optionItems}
        </Form.Select>
      </div>
      <div className="d-flex justify-content-center">
        <AddButton selected={selects} onClick={onClick} />

        <ShowButton display={display} />
      </div>
    </div>
  );
};

export default DropDownCountries;
