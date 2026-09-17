import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import type { ResponseOverview } from "@/utils/strapi/types";
import { ResponseCard } from "./ResponseCard";

afterEach(() => {
  cleanup();
});

const mockResponse: ResponseOverview = {
  id: 1,
  name: "Test Response",
  slug: "test-response",
  description:
    "This is a test response description. It contains enough text to verify that the card renders a concise preview of the CMS overview description.",
  imageGallery: [
    {
      id: 1,
      imageURL: "/test-image.jpg",
      altText: "Test header image",
      attributionName: null,
      attributionURL: null,
    },
  ],
};

describe("ResponseCard", () => {
  it("renders CMS response content and links to its slug", () => {
    render(<ResponseCard response={mockResponse} />);

    expect(
      screen.getByRole("heading", { name: mockResponse.name }),
    ).toBeVisible();
    expect(screen.getByText(/This is a test response/)).toBeVisible();
    expect(screen.getByAltText("Test header image")).toBeVisible();
    expect(screen.getByRole("link", { name: "See Details" })).toHaveAttribute(
      "href",
      "/responses/test-response",
    );
  });

  it("renders safely when optional CMS content is missing", () => {
    render(
      <ResponseCard
        response={{
          id: 2,
          name: "Response Without Media",
          slug: "response-without-media",
          description: null,
          imageGallery: [],
        }}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Response Without Media" }),
    ).toBeVisible();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "See Details" })).toHaveAttribute(
      "href",
      "/responses/response-without-media",
    );
  });
});
