import React, { useEffect, useState } from "react";
import AddButton from "./AddButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

const DropDownCountries = ({ countries, onSelect }) => {
  const [selects, setSelects] = useState();

  let optionItems = countries.map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ));

  return (
    <div className="allContent">
      <Form.Select
        style={{ fontSize: 15, width: 300, marginBottom: 15 }}
        value={selects}
        onChange={(e) => setSelects(e.target.value)}
      >
        {optionItems}
      </Form.Select>
      <AddButton selected={selects} onSelect={onSelect} />
    </div>
  );
};

export default DropDownCountries;
