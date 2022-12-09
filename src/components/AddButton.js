import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const countriesList = [];

const AddButton = ({ selected, onClick }) => {
  return (
    <div>
      <Button variant="outline-success" onClick={() => onClick(selected)}>
        Add Country
      </Button>
    </div>
  );
};

export default AddButton;
