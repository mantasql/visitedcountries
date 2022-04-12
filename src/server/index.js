const url = require("./password");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const CountryModel = require("./models/Country");

app.use(express.json());
app.use(cors());

mongoose.connect(url.url, {
  useNewUrlParser: true,
});

app.post("/insert", async (req, res) => {
  const countryName = req.body.countryName;
  const countryRegion = req.body.countryRegion;
  const countryArea = req.body.countryArea;
  const countryPopulation = req.body.countryPopulation;
  const alpha3Code = req.body.alpha3Code;

  const country = new CountryModel({
    countryName: countryName,
    countryRegion: countryRegion,
    countryArea: countryArea,
    countryPopulation: countryPopulation,
    alpha3Code: alpha3Code,
  });

  try {
    await country.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("server is running on port 3001...:)");
});
