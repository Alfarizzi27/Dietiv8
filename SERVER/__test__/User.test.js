const request = require("supertest");
const app = require("../app");
const axios = require("axios");
const { sequelize } = require("../models");
const bc = require("bcryptjs");

beforeAll(async () => {
  await sequelize.queryInterface.bulkInsert(
    "Users",
    [
      {
        username: "dikid",
        email: "dikid123@mail.com",
        password: bc.hashSync("dikid123"),
        gender: "male",
        weight: 60,
        height: 150,
        dateBirth: "1996-05-23",
        activityLevel: 1,
        extra: "",
        targetWeight: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
});
afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Users", null, {
    restartIdentity: true,
    cascade: true,
    truncate: true,
  });
});

describe("POST /users/register ", () => {
  it("success", async () => {
    const bodyData = {
      username: "test",
      email: "test@mail.com",
      password: bc.hashSync("test"),
      phoneNumber: "+62123123123",
      address: "jl. Gubeng",
    };
    const respond = await request(app)
      .post("/public/customers/register")
      .send(bodyData);
    expect(respond.status).toBe(201);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("id", expect.any(Number));
    expect(respond.body).toHaveProperty("email", bodyData.email);
  });
  it("fail email empty", async () => {
    const bodyData = {
      username: "dikid",
      email: "",
      password: bc.hashSync("dikid"),
      gender: "male",
      weight: 60,
      height: 150,
      dateBirth: "1996-05-23",
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Email is required");
  });
  it("invalid email format", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidtestmail.com",
      password: bc.hashSync("dikid"),
      gender: "male",
      weight: 60,
      height: 150,
      dateBirth: "1996-05-23",
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Wrong email format");
  });
  it("password null", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidtest123@mail.com",

      gender: "male",
      weight: 60,
      height: 150,
      dateBirth: "1996-05-23",
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Password is required");
  });
  it("password empty", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikid123456@mail.com",
      password: "",
      gender: "male",
      weight: 60,
      height: 150,
      dateBirth: "1996-05-23",
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Password is required");
  });
  it("password <=5", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikid9@mail.com",
      password: "diki",
      phoneNumber: "+62123123123",
      address: "jl. Gubeng",
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty(
      "message",
      "password must be 5 or greater"
    );
  });
  it("email already exists", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikid123@mail.com",
      password: bc.hashSync("dikid"),
      gender: "male",
      weight: 60,
      height: 150,
      dateBirth: "1996-05-23",
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Email must be unique");
  });
  it("gender null", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidiki@mail.com",
      password: bc.hashSync("dikid"),
      gender: "",
      weight: 60,
      height: 150,
      dateBirth: "1996-05-23",
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Gender is required");
  });
  it("gender empty", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidiki@mail.com",
      password: bc.hashSync("dikid"),
      weight: 60,
      height: 150,
      dateBirth: "1996-05-23",
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Gender is required");
  });
  it("weight null", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidiki@mail.com",
      password: bc.hashSync("dikid"),
      gender: "male",
      weight: "",
      height: 150,
      dateBirth: "1996-05-23",
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Weight is required");
  });
  it("weight empty", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidiki@mail.com",
      password: bc.hashSync("dikid"),
      gender: "male",
      height: 150,
      dateBirth: "1996-05-23",
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Weight is required");
  });
  it("height null", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidiki@mail.com",
      password: bc.hashSync("dikid"),
      gender: "male",
      weight: 60,
      height: "",
      dateBirth: "1996-05-23",
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Height is required");
  });
  it("height empty", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidiki@mail.com",
      password: bc.hashSync("dikid"),
      gender: "male",
      weight: 60,
      dateBirth: "1996-05-23",
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Height is required");
  });
  it("date birth null", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidiki@mail.com",
      password: bc.hashSync("dikid"),
      gender: "male",
      weight: 60,
      height: 150,
      dateBirth: "",
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Date Birth is required");
  });
  it("height empty", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidiki@mail.com",
      password: bc.hashSync("dikid"),
      gender: "male",
      weight: 60,
      height: 150,
      activityLevel: 1,
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Date Birth is required");
  });
  it("activity level null", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidiki@mail.com",
      password: bc.hashSync("dikid"),
      gender: "male",
      weight: 60,
      height: 150,
      dateBirth: "2000-05-23",
      activityLevel: '',
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Activity is required");
  });
  it("activity level empty", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidiki@mail.com",
      password: bc.hashSync("dikid"),
      gender: "male",
      weight: 60,
      height: 150,
      dateBirth: "2000-05-23",
      extra: "",
      targetWeight: 70,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Activity is required");
  });
it("Target weight null", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidiki@mail.com",
      password: bc.hashSync("dikid"),
      gender: "male",
      weight: 60,
      height: 150,
      dateBirth: "2000-05-23",
      activityLevel: 1,
      extra: "",
      targetWeight: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Target Weight is required");
  });
  it("Target weight empty", async () => {
    const bodyData = {
      username: "dikid",
      email: "dikidiki@mail.com",
      password: bc.hashSync("dikid"),
      gender: "male",
      weight: 60,
      height: 150,
      dateBirth: "2000-05-23",
      activityLevel: 1,
      extra: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const respond = await request(app).post("/users/register").send(bodyData);
    expect(respond.status).toBe(400);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty("message", "Target Weight is required");
  });
});

describe("POST /users/login ", () => {
  it(" success", async () => {
    const bodyData = {
        email: "dikid123@mail.com",
        password: bc.hashSync("dikid123"),
    };
    try {
      const respond = await request(app)
        .post("/users/login")
        .send(bodyData);
      expect(respond.status).toBe(200);
      expect(respond.body).toBeInstanceOf(Object);
      expect(respond.body).toHaveProperty("access_token", expect.any(String));
    } catch (error) {
      console.log("ERRRORRRRR", error);
    }
  });
  it("Wrong Password", async () => {
    const bodyData = {
      email: "dikid123@mail.com",
      password: "diki",
    };
    const respond = await request(app)
      .post("/users/login")
      .send(bodyData);
    expect(respond.status).toBe(401);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty(
      "message",
      "error invalid email or password"
    );
  });
  it("Email is no register", async () => {
    const bodyData = {
      email: "notregister@mail.com",
      password: "notregister",
    }
    const respond = await request(app)
      .post("/users/login")
      .send(bodyData);
    expect(respond.status).toBe(401);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty(
      "message",
      "error invalid email or password"
    );
  });
});
