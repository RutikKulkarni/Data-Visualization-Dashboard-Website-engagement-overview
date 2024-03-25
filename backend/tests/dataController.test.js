const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");

// Example test case
describe("GET /api/data", () => {
  it("responds with json", async () => {
    const response = await request(app).get("/api/data");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveLength(0); // Assuming initial data length is 0
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
