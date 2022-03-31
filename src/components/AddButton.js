const countriesList = [];

const AddButton = (props) => {
  const addCountry = () => {
    countriesList.push(props.selected);
    console.log(countriesList);
  };

  return (
    <div>
      <button onClick={addCountry}>Add Country</button>
      {countriesList.map((country) => (
        <li>{country}</li>
      ))}
    </div>
  );
};

export default AddButton;
