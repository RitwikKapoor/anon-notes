const mongoose = require("mongoose");
const request = require("supertest");
const app = require("./app.js");
const dotenv = require("dotenv");
const Post = require("./model.js");
dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.DB_TEST_URL);
});

describe("GET /api/posts", () => {
  it("should fetch all posts", async () => {
    const response = await request(app).get("/api/posts");
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });
});

describe("POST /api/posts", () => {
  it("should create a new post", async () => {
    const newPost = { content: "Test post" };
    const response = await request(app).post("/api/posts").send(newPost);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("success", true);
  });

  it("should fail to create a post with missing content", async () => {
    const response = await request(app).post("/api/posts").send({});
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("success", false);
  });

  it("should fail to create a post with empty content", async () => {
    const newPost = { content: "" };
    const response = await request(app).post("/api/posts").send(newPost);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("success", false);
  });
});

afterAll(async () => {
  await Post.deleteMany();
  await mongoose.connection.close();
});
