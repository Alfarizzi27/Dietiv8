const bcrypt = require("bcryptjs");
const calorieLimit = require('../helpers/caloryLimit')
const { User } = require("../models");
const { createToken, verifyToken } = require("../helpers/jwt");
const axios = require("axios");
const getAge = require("../helpers/getAge");
class UserController {
  static async register(req, res, next) {
    try {
      let {
        gender,
        username,
        email,
        password,
        weight,
        height,
        dateBirth,
        activityLevel,
        extra,
        targetWeight,
      } = req.body;
      let calorieLimitVal = await calorieLimit(req.body,req.body.weight)
      let user = await User.create({
        gender,
        username,
        email,
        password,
        weight,
        height,
        dateBirth,
        activityLevel,
        extra,
        calorieLimit:calorieLimitVal,
        targetWeight,
      });

// Route untuk mengirim email
// Konfigurasi Nodemailer untuk Mailtrap
var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6310e64aea615e",
    pass: "0832e7dbf3b240"
  }
});
const tanggal = req.session.date
  const mailOptions = {
    from: 'kiriminEngine@kirimin.com',
    to: req.session.email
                    ,
    subject: 'Registrasi Berhasil',
    text: `Registrasi anda sudah berhasil pada ${tanggal}`,
  };
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email tidak dapat dikirim');
    } else {
      return res.redirect('login')
      // return res.redirect(`/user/${req.session.userId}/profile`)

    }
  });

      return res.status(201).json({
        gender: user.gender,
        username: user.username,
        email: user.email,
        weight: user.weight,
        height: user.height,
        extra: user.extra,
        calorieLimit: user.calorieLimit,
        targetWeight: user.targetWeight,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: "emailpasswordempty" };
      }
      let user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "invalid_email_password" };
      }
      const isValid = bcrypt.compareSync(password, user.password);
      if (!isValid) {
        throw { name: "invalid_email_password" };
      }

      const payload = {
        id: user.id,
        gender: user.gender,
        username: user.username,
        email: user.email,
        weight: user.weight,
        height: user.height,
        extra: user.extra,
        calorieLimit: user.calorieLimit,
        targetWeight: user.targetWeight,
        activityLevel: user.activityLevel,
        dateBirth:user.dateBirth
      };
      const token = createToken(payload, process.env.SECRET);
      return res.status(200).json({ access_token: token });
    } catch (error) {
      next(error);
    }
  }

   static async update(req, res, next) {
    console.log('MASUK UPDATE');
    // const id= req.params.id
    const id = req.user.id
    try {
      let {
        gender,
        username,
        email,
        password,
        weight,
        height,
        dateBirth,
        activityLevel,
        extra,
        targetWeight,
      } = req.body;
      // console.log('user=',req.body,'=== weight ====',req.body.weight);
      let calorieLimitVal = await calorieLimit(req.body,req.body.weight)
      // console.log(calorieLimitVal,'==CALLIM');
      let user = await User.update({
        gender,
        username,
        email,
        password:bcrypt.hashSync(password),
        weight,
        height,
        dateBirth,
        activityLevel,
        extra,
        calorieLimit:calorieLimitVal,
        targetWeight,
      },{where:{id}});

        const payload = {
        id: id,
        gender: gender,
        username: username,
        email: email,
        weight: weight,
        height: height,
        extra: extra,
        calorieLimit: calorieLimitVal,
        targetWeight: targetWeight,
        activityLevel: activityLevel,
        dateBirth:dateBirth
      };
      const token = createToken(payload, process.env.SECRET);
      return res.status(200).json({ access_token: token });
    } catch (err) {
      next(err);
    }
  }
}
// function test() {
//   let dob = new Date('2020-01-01')
//   let month_diff= new Date() - dob.getTime();
//   let age_dt = new Date(month_diff)
//   let year = age_dt.getUTCFullYear()
//   let age = Math.abs(year - 1970);
// console.log(age);
// }
// test();
module.exports = UserController;
