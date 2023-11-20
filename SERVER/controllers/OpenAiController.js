const agent = require("../config/configOpenAi")
class OpenAiController {
    static async getMenu(req, res, next) {
        try {
            // const { caloryLimit, extra } = req.user
            const caloryLimit = 1400
            const extra = ""
            let promtRec = `Get indonesia menu food for 1 day with calorie limit ${caloryLimit}`
            if(extra) promtRec += `With Restriction ${extra}`
            const menuRec = await agent(promtRec)
            res.status(201).json(menuRec)
        } catch(error) {
            next(error)
        }
    } 

    static async countCalorie(food) {
        try {
            // const { food } = req.params
            const countCalorie = await agent(`Count the food/drink calorie of ${food}`)
            return countCalorie
        } catch(error) {
            next(error)
        }
    }

}

module.exports = OpenAiController