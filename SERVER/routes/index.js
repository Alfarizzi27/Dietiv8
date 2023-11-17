const express = require(`express`);
const router = express.Router();
const userRoute = require("./user");
const foodRoute = require("./food");
const openAiRouter = require("./openAi");

router.use("/users", userRoute);
router.use("/foods", foodRoute);
router.use("/openai", openAiRouter)

module.exports = router;
