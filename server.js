const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//app config
const app = express();
const port = process.env.PORT || 8001;
//middlewares

//db config

//api endpoints
app.get("/", (req, res) => {
  res.status(200).send("sight");
});

//listener
app.listen(port, () => {
  console.log(`listening on localhost: ${port}`);
});
