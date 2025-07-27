// tests/api/activityApi.test.js

const request = require("supertest");
const app = require("../server"); // Assume Express.js backend

describe("GET /api/activities", () => {
  it("returns 7-day ranking for a valid city", async () => {
    const res = await request(app).get("/api/activities?city=Berlin");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(7);

    res.body.forEach((day) => {
      expect(day).toHaveProperty("date");
      expect(day).toHaveProperty("activity");
      expect(day.rank).toBeGreaterThanOrEqual(1);
      expect(day.rank).toBeLessThanOrEqual(10);
      expect(day).toHaveProperty("reasoning");
    });
  });

  it("returns 400 for invalid city input", async () => {
    const res = await request(app).get("/api/activities?city=InvalidCity123");
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch(/not found/i);
  });

  it("handles API errors gracefully", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.reject("API Down")
    );

    const res = await request(app).get("/api/activities?city=Paris");
    expect(res.statusCode).toBe(500);
    expect(res.body.message).toMatch(/unable to fetch/i);

    global.fetch.mockRestore();
  });
});
