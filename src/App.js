import DropDownCountries from "./components/DropDownCountries";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <style type="text/css">
        {`
          body {
            background-color: black;
            color: white;
          }
          li {
            list-style: none;
          }
          `}
      </style>
      <DropDownCountries />
    </div>
  );
}

export default App;
