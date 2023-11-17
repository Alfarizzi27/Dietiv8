const express = require(`express`);
const { getMenu, countCalorie } = require("../controllers/OpenAiController");
const openAiRouter = express.Router();

openAiRouter.get("/menu", getMenu)
openAiRouter.get("/calorie/:food", countCalorie)

module.exports = openAiRouter