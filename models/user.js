'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    dateBirth: DataTypes.DATE,
    activityLevel: DataTypes.INTEGER,
    targetWeight: DataTypes.STRING,
    extra: DataTypes.STRING,
    calorieLimit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};