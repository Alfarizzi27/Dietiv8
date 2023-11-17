const express = require('express')
const Controller = require('../controllers/UserController')
const router = express.Router()

router.get('/register',Controller.register)
module.exports = router