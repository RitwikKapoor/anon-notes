import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import NoteList from "../src/pages/NoteList";

describe("NoteList", () => {
  test('should display the heading "Recent Notes"', () => {
    render(<NoteList />);

    const heading = screen.getByText("Recent Notes");
    expect(heading).toBeDefined();
  });
});

