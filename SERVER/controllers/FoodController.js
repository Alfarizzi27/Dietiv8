const { Food } = require("../models");

class FoodController {
  static async foods(req, res, next) {
    try {
      const allFood = await Food.findAll();
      console.log('masuk food');
      return res.status(200).json(allFood);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FoodController;
