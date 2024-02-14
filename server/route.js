const express = require("express");
const { createPost, getAllPosts } = require("./controller.js");

const router = express.Router();

router.post("/posts", createPost);
router.get("/posts", getAllPosts);

module.exports = router;
