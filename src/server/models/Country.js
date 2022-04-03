const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  countryName: {
    type: String,
    required: true,
  },
  countryRegion: {
    type: String,
    required: true,
  },
  countryArea: {
    type: Number,
    required: true,
  },
  countryPopulation: {
    type: Number,
    required: true,
  },
  alpha3Code: {
    type: String,
    required: true,
  },
});
