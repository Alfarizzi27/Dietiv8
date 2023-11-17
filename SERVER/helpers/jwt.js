const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;
function createToken(payload) {
  return jwt.sign(payload, secret);
}
function verifyToken(token) {
  return jwt.verify(token, secret);
}

module.exports = { createToken, verifyToken };
