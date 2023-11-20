const { History, Menu, Food, FoodEaten } = require("../models/index");
const getCurrentDate = require("../helpers/getCurrentDate");

class HistoryController {
  static async findAll(req, res, next) {
    try {
      const userId = req.user.id;
      const allHistory = await History.findAll({
        where: { userId },
        include: [
          {
            model: FoodEaten,
            include: Food,
          },
          {
            model: Menu,
          },
        ],
      });
      res.status(200).json(allHistory);
    } catch (error) {
      next(error);
    }
  }

  static async findCurrent(req, res, next) {
    try {
      const userId = req.user.id
      // const userId = 1;
      const calorieLimit = req.user.calorieLimit
      // const calorieLimit = 1400;
      const currentDate = getCurrentDate();
      const [history, created] = await History.findOrCreate({
        where: { day: currentDate, userId },
        include: [Food, Menu],
        defaults: {
          calorieLimit,
          day: currentDate,
          userId,
          isOver: false,
          calorieGain: 0,
        },
      });
      if (created) {
        res.status(201).json(history);
      } else {
        res.status(200).json(history);
      }
    } catch (error) {
      return res.json(error)
      next(error);
    }
  }
}

module.exports = HistoryController;
