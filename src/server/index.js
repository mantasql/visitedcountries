const url = require("./password");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const CountryModel = require("./models/Country");

app.use(express.json());

mongoose.connect(url.url, {
  useNewUrlParser: true,
});

app.get("/", async (req, res) => {
  const country = new CountryModel({
    countryName: "Lithuania",
    countryRegion: "Europe",
    countryArea: 50,
    countryPopulation: 50,
    alpha3Code: "LTU",
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
