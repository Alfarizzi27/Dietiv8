const express = require("express");
const router = express.Router();
const Controller = require("../controllers/FoodController");
router.get("/", Controller.foods);
module.exports = router;
