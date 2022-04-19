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
      <Form.Select
        style={{ fontSize: 15, width: 300, marginBottom: 15 }}
        value={selects}
        onChange={(e) => {
          setSelects(e.target.value);
        }}
      >
        {optionItems}
      </Form.Select>
      <Container>
        <Row xs={1} md={4} lg={6}>
          <Col>
            <AddButton selected={selects} onClick={onClick} />
          </Col>
          <Col>
            <ShowButton display={display} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DropDownCountries;
