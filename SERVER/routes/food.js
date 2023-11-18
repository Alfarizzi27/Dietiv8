const express = require("express");
const router = express.Router();
const Controller = require("../controllers/FoodController");
router.get("/", Controller.filterFoods);
router.post("/:historyId", Controller.inputFood)
module.exports = router;
