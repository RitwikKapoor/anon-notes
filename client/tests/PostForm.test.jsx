import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PostForm from "../src/pages/PostForm.jsx";

describe("PostForm", () => {
  test("should render without errors", () => {
    render(<PostForm />);
    const textareaElement = screen.getByPlaceholderText(
      "Write your anonymous note here..."
    );
    const postButtonElement = screen.getByText("Post");
    expect(textareaElement).toBeDefined();
    expect(postButtonElement).toBeDefined();
  });
});
