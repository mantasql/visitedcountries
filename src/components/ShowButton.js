import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";

const ShowButton = ({ display }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          {display.map((item) => (
            <ListGroup key={item._id}>
              <h4>{item.countryName}</h4>
              <ListGroup.Item>Region: {item.countryRegion} </ListGroup.Item>
              <ListGroup.Item>Area: {item.countryArea}km²</ListGroup.Item>
              <ListGroup.Item>
                Population: {item.countryPopulation}
              </ListGroup.Item>
              <ListGroup.Item>Code: {item.alpha3Code}</ListGroup.Item>
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
