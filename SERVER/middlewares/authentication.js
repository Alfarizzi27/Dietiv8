const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");
async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "unauthenticated" };
    }
    const payload = verifyToken(access_token); // iat = issued at
    const find = await User.findByPk(payload.id);
    // console.log(find, "<<<<<<<FIN");
    if (!find) {
      throw { name: "unauthenticated" };
    }
    req.user = {
      id: find.id,
      calorieLimit: find.calorieLimit,
      weight: find.weight,
      activityLevel:find.activityLevel,
      height:find.height,
      dateBirth:find.dateBirth,
      gender:find.gender
    };
    console.log('<<<SELESAI AUTHenticatoin');
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = { authentication };
