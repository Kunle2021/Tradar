const functions = require("firebase-functions");
const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./config");
const {
  ctrlLogin,
  ctrlRead,
  ctrlCreate,
  ctrlUpdate,
  ctrlDelete,
  ctrlAllRead,
} = require("./controller");

const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(cors());

app.post("/login", ctrlLogin, (req, res) => res.json(res.data));

app.get("/api/jobs", ctrlAllRead, (req, res) => res.json(res.data));

app.get("/api/jobs/:doc", ctrlRead, (req, res) => res.json(res.data));

app.post("/api/quotes", ctrlCreate, (req, res) => res.json(res.data));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("An error occurred");
});

exports.app = functions.https.onRequest(app);
