const express = require("express");
const router = express.Router();
const { User } = require("../user");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config");


// User Sign Up Routes:
router.post("/signup", async (req, res) => {

})

// User Sign In Routes:
router.post("/signin", async (req, res) => {

})

module.exports = router;