const express = require("express")
const menuRouter = express.Router()
const MenuController = require("../controllers/MenuController")
const authenticationMenu = require("../middlewares/authenticationMenu")

menuRouter.get("/:historyId", authenticationMenu, MenuController.getMenu)
menuRouter.post("/:historyId", authenticationMenu, MenuController.createMenu)
menuRouter.patch("/:historyId", authenticationMenu, MenuController.eatMenu)

module.exports = menuRouter