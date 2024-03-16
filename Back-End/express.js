const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

// Importing necessary dependecies:
const mainRouter = require("./routes/mainRouter");

const app = express();
app.use(express.json());
app.use(cors());

// Routes to the user and admin for signup, signin:
app.use("/api/v1", mainRouter);

app.use(bodyParser.json());
