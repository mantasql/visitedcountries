const url = mymodule.url;
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect(url, {
  useNewUrlParser: true,
});

app.listen(3001, () => {
  console.log("server is running on port 3001...:)");
});
