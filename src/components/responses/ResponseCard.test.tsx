import { describe, expect, it, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

import { ResponseCard } from "./ResponseCard";

afterEach(() => {
  cleanup();
});

const mockResponse = {
  name: "Test Response",
  url: "/responses/test-response",
  headerImage: "/test-image.jpg",
  headerImageAlt: "Test header image",
  about:
    "This is a test response description. It contains enough text to verify that the card truncates the about text after one hundred and eighty characters so that the preview stays concise on the overview page.",
};

describe("ResponseCard", () => {
  it("renders the response name", () => {
    render(<ResponseCard response={mockResponse} />);

    expect(
      screen.getByRole("heading", { name: mockResponse.name }),
    ).toBeVisible();
  });

  it("renders a preview of the about text", () => {
    render(<ResponseCard response={mockResponse} />);

    expect(screen.getByText(/This is a test response/)).toBeVisible();
  });

  it("links to the response detail page", () => {
    render(<ResponseCard response={mockResponse} />);

    const link = screen.getByRole("link", { name: "See Details" });
    expect(link).toHaveAttribute("href", mockResponse.url);
  });
});
