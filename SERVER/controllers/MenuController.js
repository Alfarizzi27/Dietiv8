const { Menu, History, sequelize } = require("../models/index");

class MenuController {
  static async getMenu(req, res, next) {
    try {
      const { historyId } = req.params;
      const menuTarget = await Menu.findOne({ where: { historyId } });
      if(!menuTarget) throw({name: "menu_not_found"})
      res.status(200).json(menuTarget);
    } catch (error) {
      next(error);
    }
  }

  static async createMenu(req, res, next) {
    try {
      const { historyId } = req.params;
      const listEat = req.body
      const newMenu = await Menu.create({
        breakfastEaten: false,
        lunchEaten: false,
        dinnerEaten: false,
        snackEaten: false,
        historyId,
        ...listEat,
      });
      res.status(201).json(newMenu);
    } catch (error) {
      next(error);
    }
  }

  static async eatMenu(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { historyId } = req.params;
      const { eaten, calorie } = req.body;
      const eatenBool = `${eaten}Eaten`;
      const historyTarget = await History.findByPk(historyId);
      const calorieGain = historyTarget.calorieGain + calorie;
      const isOver = calorieGain > historyTarget.calorieLimit;
      await Menu.update(
        { [eatenBool]: true },
        { where: { historyId } },
        { transaction: t }
      );
      await History.update(
        { isOver, calorieGain },
        { where: { id: historyId } },
        { transaction: t }
      );
      await t.commit();
      res.status(201).json({ message: "Food has been inputed" });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
}

module.exports = MenuController;
