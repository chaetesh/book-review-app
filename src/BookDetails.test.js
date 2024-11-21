import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookDetails from "./BookDetails";

jest.mock("../api", () => ({
  fetchBookReviews: jest
    .fn()
    .mockResolvedValue({ reviews: [{ rating: 5, text: "Great book!" }] }),
  addReview: jest.fn().mockResolvedValue({ rating: 4, text: "Nice read!" }),
}));

describe("BookDetails Component", () => {
  it("renders book reviews", async () => {
    render(
      <MemoryRouter>
        <BookDetails />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("5 Stars")).toBeInTheDocument();
      expect(screen.getByText("Great book!")).toBeInTheDocument();
    });
  });

  it("submits a new review", async () => {
    render(
      <MemoryRouter>
        <BookDetails />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText("Rating (1-5)"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByPlaceholderText("Write your review"), {
      target: { value: "Nice read!" },
    });
    fireEvent.click(screen.getByText("Submit Review"));

    await waitFor(() => {
      expect(screen.getByText("4 Stars")).toBeInTheDocument();
      expect(screen.getByText("Nice read!")).toBeInTheDocument();
    });
  });
});
