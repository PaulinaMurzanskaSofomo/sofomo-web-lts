import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProgressCards } from "../ProgressCards";

describe("Progress Cards", () => {
  test("should be in the document", () => {
    render(<ProgressCards />);
    const progressCards = screen.getByTestId("progress-cards");
    expect(progressCards).toBeInTheDocument();
  });

  test("should display 4 cards", () => {
    render(<ProgressCards />);
    const cards = screen.getAllByTestId("progress-card");
    expect(cards.length).toBe(4);
  });
});
