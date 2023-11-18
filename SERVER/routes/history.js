const express = require("express")
const historyRouter = express.Router();
const HistoryController = require("../controllers/HistoryController")

historyRouter.get("/all", HistoryController.findAll)
historyRouter.get("/now", HistoryController.findCurrent)


module.exports = historyRouter