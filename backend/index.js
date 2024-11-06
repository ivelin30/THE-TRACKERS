require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fs = require('fs');
const cors = require("cors");
const albumRoute = require("./routes/albumRoute")
const loginRoute = require("./routes/loginRoute")

app.use(express.json());

app.use(cors());

app.use("/albums", albumRoute);
app.use("/users", loginRoute);

mongoose
  .connect(process.env.MONGODB_URI, {
    
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("Server Started");
});

