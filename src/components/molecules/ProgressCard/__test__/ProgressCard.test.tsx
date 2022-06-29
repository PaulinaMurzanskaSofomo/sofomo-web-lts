import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProgressCard, Props } from "../ProgressCard";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

const ProgressCardProps: Props = {
  cardTitle: "Android Technologies",
  cardBodyText:
    "Proficient in Kotlin/Java/C++, Coroutines/RxAndroid, Retrofit Dagger/Koin, RESTful API’s, GraphQL, WebRTC, Firebase",
  cardActive: false,
  visited: false,
  id: "progress-card-1",
};

// test("testing", () => {
//   expect(true).toBe(true);
// });

describe("ProgressCard", () => {
  test("should show card title", () => {
    render(<ProgressCard {...ProgressCardProps} />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  test("should contain the card component", () => {
    render(<ProgressCard {...ProgressCardProps} />);
    expect(screen.getByTestId("progress-card")).toContainElement(
      screen.getByText(ProgressCardProps.cardBodyText)
    );
  });

  test("should contain a left-aside bar ", () => {
    render(<ProgressCard {...ProgressCardProps} />);
    expect(screen.getByTestId("progress-card")).toContainElement(
      screen.getByTestId("vertical-bar")
    );
  });

  test("should contain title provided in props ", () => {
    render(<ProgressCard {...ProgressCardProps} />);
    expect(screen.getByTestId("progress-card")).toHaveTextContent(ProgressCardProps.cardTitle);
  });

  test("should add active classes if prop cardActive class is true  ", () => {
    render(<ProgressCard {...ProgressCardProps} visited cardActive />);
    const visited = true;
    const cardActive = true;

    expect(screen.getByTestId("check-mark")).toHaveClass((cardActive || visited) && "active");

    expect(screen.getByTestId("vertical-line")).toHaveClass((cardActive || visited) && "active");

    expect(screen.getByTestId("card-wrapper")).toHaveClass(cardActive && "active");
  });

  test("should have cursor pointer attribute", () => {
    render(<ProgressCard {...ProgressCardProps} />);
    expect(screen.getByTestId("progress-card")).toHaveStyle("cursor:pointer");
  });

  test("should have working onClick function if provided", async () => {
    const mockClick = jest.fn(() => console.info("card clicked"));
    render(<ProgressCard {...ProgressCardProps} handleCardClick={mockClick} />);
    await userEvent.click(screen.getByTestId("progress-card"));
    expect(mockClick).toHaveBeenCalled();
  });
});
