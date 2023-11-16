const express = require("express");
const Controller = require("../controllers/productController");
const {authentication} = require("../middlewares/authentication");
const router = express.Router();
const Controller = require("../controllers/foodController");
router.get("/", Controller.foods);

module.exports = router;
