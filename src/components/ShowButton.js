import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";

const ShowButton = ({ display }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteCountry = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`);
  };

  return (
    <div>
      <Button variant="outline-success" onClick={handleShow}>
        My Countries
      </Button>
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            My visited countries
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {display.map((val, key) => (
            <ListGroup key={key}>
              <h4>
                {val.countryName}{" "}
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => deleteCountry(val._id)}
                >
                  x
                </Button>
              </h4>
              <ListGroup.Item>Region: {val.countryRegion} </ListGroup.Item>
              <ListGroup.Item>Area: {val.countryArea}km²</ListGroup.Item>
              <ListGroup.Item>
                Population: {val.countryPopulation}
              </ListGroup.Item>
              <ListGroup.Item>Code: {val.alpha3Code}</ListGroup.Item>
            </ListGroup>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShowButton;
