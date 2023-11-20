const request = require("supertest");
const app = require("../app");
const axios = require("axios");
const { sequelize } = require("../models");
const bc = require("bcryptjs");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");
let validToken;
beforeAll(async () => {
  const user = await User.create({
    username: "dikid",
    email: "dikid123fix@mail.com",
    password: bc.hashSync("dikid123fix"),
    gender: "male",
    weight: 60,
    height: 150,
    dateBirth: "1996-05-23",
    activityLevel: 1,
    extra: "",
    targetWeight: 70,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  //passwordnya gak perlu dibawa
  const payload = {
    id: 1,
    username: "dikid",
    email: "dikid123fix@mail.com",
    gender: "male",
    weight: 60,
    height: 150,
    activityLevel: 1,
    extra: "",
    targetWeight: 70,
    calorieLimit: 1538,
    dateBirth: "1997-01-26T00:00:00.000Z",
  };
  validToken = createToken(payload);
});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Users", null, {
    restartIdentity: true,
    cascade: true,
    truncate: true,
  });
});
describe("Menu ", () => {
  describe("get /openai/menu ", () => {
    it("succcess", async () => {
      const respond = await request(app)
        .get("/openai/menu")
        .set("access_token", validToken);
      expect(respond.status).toBe(200);
      expect(respond.body).toBeInstanceOf(Object);
      expect(respond.body).toHaveProperty("breakfast");
    });
  });
  describe("POST /menus/:historyId", () => {
    it("succcess", async () => {
      const bodyData = {
        breakfast: "Nasi Uduk",
        breakfastCalorie: 300,
        lunch: "Nasi Padang",
        lunchCalorie: 350,
        dinner: "Nasi Pecel",
        dinnerCalorie: 300,
        snack: "Kacang",
        snackCalorie: 50,
      };
      const respond = await request(app)
        .post("/menus/1")
        .set("access_token", validToken)
        .send(bodyData);
      expect(respond.status).toBe(201);
      expect(respond.body).toBeInstanceOf(Object);
      expect(respond.body).toHaveProperty("breakfast");
    });
  });
  describe("GET /menus/:historyId", () => {
    it("succcess", async () => {
      //set by param
      const respond = await request(app)
        .get("/menus/1")
        .set("access_token", validToken);

      expect(respond.status).toBe(200);
      expect(respond.body).toBeInstanceOf(Object);
      expect(respond.body).toHaveProperty("id");
    });
  });
  describe("PATCH /menus/:historyId", () => {
    it("succcess", async () => {
      //set by param
      const bodyData = {
        eaten: "breakfast",
        calorie: 300,
      };
      const respond = await request(app)
        .patch("/menus/1")
        .set("access_token", validToken)
        .send(bodyData);
      expect(respond.status).toBe(200);
      expect(respond.body).toBeInstanceOf(Object);
      expect(respond.body).toHaveProperty("message");
    });
  });
});

describe("Histories ", () => {
  describe("GET /histories/now", () => {
    it("succcess", async () => {
      //set by param
      const respond = await request(app)
        .get("/histories/now")
        .set("access_token", validToken);

      expect(respond.status).toBe(200);
      expect(respond.body).toBeInstanceOf(Object);
      expect(respond.body).toHaveProperty("id");
    });
  });
});
