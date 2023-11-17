const agent = require("../config/configOpenAi")
class OpenAiController {
    static async getMenu(req, res, next) {
        try {
            const menuRec = await agent("Get Indonesian menu food for 1 day with calorie limit 1400")
            res.status(200).json(menuRec)
        } catch(error) {
            next(error)
        }
    } 

    static async countCalorie(req, res, next) {
        try {
            const { food } = req.params
            const countCalorie = await agent(`Count the food/drink calorie of ${food}`)
            res.status(200).json(countCalorie)
        } catch(error) {
            next(error)
        }
    }

}

module.exports = OpenAiController