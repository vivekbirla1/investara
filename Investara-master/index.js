const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
require("./db/config");


const User = require("./db/User");
const bodyParser = require("body-parser");
const Startup = require("./db/Startup");
const Feedback = require("./db/Feedback");
app.use(express.json());
app.use(cors());

app.post("/contact", async (req, res) => {
  let data = new Feedback(req.body);
  let result = await data.save();
  result = result.toObject();
  res.send(result);
});

app.post("/signup", async (req, res) => {
  let data = new User(req.body);
  let result = await data.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/founders", async (req, res) => {
  let data = new Startup(req.body);
  let result = await data.save();
  result = result.toObject();
  res.send(result);
  console.log(result);
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No user found" });
    }
  } else {
    res.send({ result: "No user found" });
  }
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}
app.listen(port, function () {
  console.log(`Server started successfully ${port}`);
});
