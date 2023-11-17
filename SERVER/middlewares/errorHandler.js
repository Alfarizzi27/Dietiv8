function errorHandler(error, req, res, next) {
    // let status = 500
    // let message = "Invalid Server Error"
    res.status(500).json(error)
}

module.exports = errorHandler