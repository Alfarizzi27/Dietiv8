const { UserAchievement, Achievement, User } = require("../models");
const axios = require("axios");
const setCaloryLimit = require('../helpers/caloryLimit')
class AchievementController {
  static async getAchievement(req, res, next) {
    const user = req.user;
    try {
      const achievement = await UserAchievement.findAll(
        { where: { idUser: user.id },include: [{ model: Achievement }] },  
      );
      res.status(201).json(achievement);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async setAchievement(req, res, next) {
    const user = req.user;
    let { currentWeight } = req.body;
    try {
      const response = await Achievement.create({
        weightBefore: user.weight,
        currentWeight,
      });
      let caloryLimit = await setCaloryLimit(user, currentWeight);
      const responseUser = await User.update(
        { calorieLimit: caloryLimit, weight: currentWeight },
        { where: { id: user.id } }
      );
      const responseUserAchievement = await UserAchievement.create({
        idUser: user.id,
        idAchievement: response.id,
      });
      res.status(201).json({ message: "Berhasil Menambahkan Achievement" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = AchievementController;
