const express = require(`express`);
const router = express.Router();
const userRoute = require("./user");
const foodRoute = require("./food");
const openAiRouter = require("./openAi");
const achievementRouter = require("./achievement");
const {authentication} = require('../middlewares/authentication')

router.use("/users", userRoute);
router.use(authentication)
router.use('/achievements',achievementRouter)
router.use("/foods", foodRoute);
router.use("/openai", openAiRouter)

module.exports = router;
