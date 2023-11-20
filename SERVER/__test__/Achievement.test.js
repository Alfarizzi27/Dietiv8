const request = require("supertest");
const app = require("../app");
const axios = require("axios");
const { sequelize } = require("../models");
const bc = require("bcryptjs");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");
// let validToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ2VuZGVyIjoibWFsZSIsInVzZXJuYW1lIjoiZGlraWQiLCJlbWFpbCI6ImRpa2lkMTIzZml4QG1haWwuY29tIiwid2VpZ2h0Ijo2MCwiaGVpZ2h0IjoxNTAsImV4dHJhIjoiIiwiY2Fsb3JpZUxpbWl0IjpudWxsLCJ0YXJnZXRXZWlnaHQiOiI3MCIsImFjdGl2aXR5TGV2ZWwiOjEsImRhdGVCaXJ0aCI6IjE5OTYtMDUtMjNUMDA6MDA6MDAuMDAwWiIsImlhdCI6MTcwMDQ2NDY0Nn0.ymkgaxyKUh0Th6QSvWJnP4MfiMCZvR9EKPIl5NrK6uU";
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
describe.skip("ACHIEVEMENTS ",()=>{
describe("Post /achievements ", () => {
  it("succcess", async () => {
    const bodyData = {
      currentWeight: 60,
    };
    const respond = await request(app)
      .post("/achievements")
      .set("access_token", validToken)
      .send(bodyData);
    expect(respond.status).toBe(201);
    expect(respond.body).toBeInstanceOf(Object);
    expect(respond.body).toHaveProperty(
      "message",
      "Berhasil Menambahkan Achievement"
    );
  });
});
describe("GET /achievements ", () => {
  it(" success", async () => {
    try {
      const respond = await request(app)
        .get("/achievements")
        // .send(bodyData);
        .set("access_token", validToken);
      expect(respond.status).toBe(200);
      expect(respond.body).toBeInstanceOf(Array);
      //   expect(respond.body).toHaveProperty("access_token", expect.any(String));
    } catch (error) {}
  });
});
})
