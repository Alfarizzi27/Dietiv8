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
// async function setCaloryLimit(user, currentWeight) {
//   let dob = new Date(user.dateBirth);
//   let month_diff = new Date() - dob.getTime();
//   let age_dt = new Date(month_diff);
//   let year = age_dt.getUTCFullYear();
//   let age = Math.abs(year - 1970);
//   //   console.log("AGE===", age);
//   let activitylevel = "";
//   if (user.activityLevel == 1) {
//     activitylevel = "level_1";
//   } else if (user.activityLevel == 2) {
//     activitylevel = "level_2";
//   } else if (user.activityLevel == 3) {
//     activitylevel = "level_3";
//   } else if (user.activityLevel == 4) {
//     activitylevel = "level_4";
//   } else if (user.activityLevel == 5) {
//     activitylevel = "level_5";
//   } else if (user.activityLevel == 6) {
//     activitylevel = "level_6";
//   }
//   const options = {
//     method: "GET",
//     url: "https://fitness-calculator.p.rapidapi.com/dailycalorie",
//     params: {
//       age: age,
//       gender: user.gender,
//       height: user.height,
//       weight: currentWeight,
//       activitylevel: activitylevel,
//     },
//     headers: {
//       "X-RapidAPI-Key": "665ed1e6f9msh6d85de1ba97e8adp1c24b6jsn6a9bcfc0b7f8",
//       "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
//     },
//   };
//   try {
//     const { data } = await axios(options);
//     let calorieLimit = Math.round(data.data.BMR);
//     return calorieLimit;
//   } catch (error) {
//     return null;
//   }
// }
module.exports = AchievementController;
