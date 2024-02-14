  import React, { useState } from "react";
  import axios from "axios";
  import { toast } from "react-toastify";
  import "./PostForm.css";

  const PostForm = () => {
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post(`${import.meta.env.VITE_APP_BASE_URL}/api/posts`, { content })
        .then(() => {
          setContent("");
          toast.success("Post created successfully");
        })
        .catch((error) => {
          toast.error("Failed to create post");
          setError("Failed to post note. Please try again.");
        });
    };

    return (
      <>
        <form className="post-form" onSubmit={handleSubmit}>
          <textarea
            className="post-input"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your anonymous note here..."
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="post-button">
            Post
          </button>
        </form>
      </>
    );
  };

  export default PostForm;
