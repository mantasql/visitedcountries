import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const countriesList = [];

const AddButton = ({ selected, onSelect }) => {
  return (
    <div>
      <Button variant="outline-success" onClick={() => onSelect(selected)}>
        Add Country
      </Button>
    </div>
  );
};

export default AddButton;
