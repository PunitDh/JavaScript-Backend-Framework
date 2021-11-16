const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./config/routes");
const { router } = require("./bin/Routes");

app.use(express.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 5000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(cors());
app.use(express.json());

app.use("/", router);

routes();

const port = app.get('port');

app.listen(port, () => console.log("Listening on port", port));