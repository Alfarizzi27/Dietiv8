"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.History,{foreignKey:'userId'})
      User.hasMany(models.userAchievement,{foreignKey:'idUser'})
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Username is required" },
          notEmpty: { msg: "Username is required" },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: { msg: "Email must be unique" },
        validate: {
          isEmail: { msg: "Wrong email format" },
          notNull: { msg: "Email is required" },
          notEmpty: { msg: "Email is required" },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Password is required" },
          notEmpty: { msg: "Password is required" },
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: { msg: "Weight is required" },
          notEmpty: { msg: "Weight is required" },
        },
      },
      height: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: { msg: "Height is required" },
          notEmpty: { msg: "Height is required" },
        },
      },
      dateBirth: {
        type: DataTypes.DATE,
        validate: {
          isDate: { msg: "DateBirth must be Date format" },
          notNull: { msg: "Date Birth is required" },
          notEmpty: { msg: "Date Birth is required" },
        },
      },
      activityLevel: {
        type: DataTypes.INTEGER,
        validate: {
          notNull: { msg: "Activity is required" },
          notEmpty: { msg: "Activity is required" },
        },
      },
      targetWeight: {
        type: DataTypes.STRING,
        validate: {
          notNull: { msg: "Target Weight is required" },
          notEmpty: { msg: "Target Weight is required" },
        },
      },
      extra: { type: DataTypes.STRING },
      calorieLimit: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
