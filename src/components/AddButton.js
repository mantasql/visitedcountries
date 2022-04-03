import React, { useEffect, useState } from "react";

const countriesList = [];

const AddButton = ({ selected, onSelect }) => {
  return (
    <div>
      <button onClick={() => onSelect(selected)}>Add Country</button>
    </div>
  );
};

export default AddButton;
