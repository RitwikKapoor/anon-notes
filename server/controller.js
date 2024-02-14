const Post = require("./model.js");

const createPost = async (req, res) => {
  const { content } = req.body;

  try {
    if (!content || content.trim() === "") {
      return res
        .status(400)
        .json({ success: false, message: "Content cannot be empty" });
    }

    const post = new Post({ content });
    await post.save();
    res
      .status(201)
      .json({ success: true, message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create post" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ success: false, message: "Failed to fetch posts" });
  }
};

module.exports = { createPost, getAllPosts };
