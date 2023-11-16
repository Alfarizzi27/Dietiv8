const express = require(`express`);
const router = express.Router();
const userRoute = require("./user");
const foodRoute = require("./food");

router.use("/users", userRoute);
router.use("/foods", foodRoute);

module.exports = router;
