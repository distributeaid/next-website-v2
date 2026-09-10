import { afterEach, describe, expect, it, vi } from "vitest";

import {
  getResponseNavigation,
  getResponseOverview,
  getResponseOverviews,
} from "./api";

const originalEnv = process.env;

afterEach(() => {
  process.env = originalEnv;
  vi.restoreAllMocks();
});

describe("response overviews", () => {
  it("fetches response navigation fields", async () => {
    process.env = {
      ...originalEnv,
      STRAPI_URL: "https://cms.example.org",
      STRAPI_KEY: "secret",
    };
    const fetchMock = vi
      .spyOn(global, "fetch")
      .mockResolvedValue(
        new Response(
          JSON.stringify({ data: [{ id: 1, name: "Levant", slug: "levant" }] }),
        ),
      );

    await expect(getResponseNavigation()).resolves.toMatchObject([
      { name: "Levant", slug: "levant" },
    ]);

    const url = new URL(fetchMock.mock.calls[0][0] as URL);
    expect(url.pathname).toBe("/api/overviews");
    expect(url.searchParams.get("fields[0]")).toBe("name");
    expect(url.searchParams.get("fields[1]")).toBe("slug");
  });

  it("fetches all response overviews with nested content populated", async () => {
    process.env = {
      ...originalEnv,
      STRAPI_URL: "https://cms.example.org",
      STRAPI_KEY: "secret",
    };
    const fetchMock = vi
      .spyOn(global, "fetch")
      .mockResolvedValue(
        new Response(
          JSON.stringify({ data: [{ id: 1, slug: "levant-response" }] }),
        ),
      );

    await expect(getResponseOverviews()).resolves.toMatchObject([
      { slug: "levant-response" },
    ]);

    const url = new URL(fetchMock.mock.calls[0][0] as URL);
    expect(url.pathname).toBe("/api/overviews");
    expect(url.searchParams.has("filters[slug][$eq]")).toBe(false);
    expect(url.searchParams.get("populate[impactStatistics][populate]")).toBe(
      "*",
    );
  });

  it("fetches the requested slug with nested response content populated", async () => {
    process.env = {
      ...originalEnv,
      STRAPI_URL: "https://cms.example.org",
      STRAPI_KEY: "secret",
    };
    const fetchMock = vi
      .spyOn(global, "fetch")
      .mockResolvedValue(
        new Response(JSON.stringify({ data: [{ id: 1, slug: "levant" }] })),
      );

    await expect(getResponseOverview("levant")).resolves.toMatchObject({
      slug: "levant",
    });

    const url = new URL(fetchMock.mock.calls[0][0] as URL);
    expect(url.pathname).toBe("/api/overviews");
    expect(url.searchParams.get("filters[slug][$eq]")).toBe("levant");
    expect(url.searchParams.get("populate[impactStatistics][populate]")).toBe(
      "*",
    );
  });

  it("returns null when the slug does not exist", async () => {
    process.env = {
      ...originalEnv,
      STRAPI_URL: "https://cms.example.org",
      STRAPI_KEY: "secret",
    };
    vi.spyOn(global, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ data: [] })),
    );

    await expect(getResponseOverview("missing")).resolves.toBeNull();
  });
});
