import { afterEach, describe, expect, it, vi } from "vitest";

import {
  getRecruitingRole,
  getRecruitingRoles,
  getResponseNavigation,
  getResponseOverview,
  getResponseOverviews,
} from "./api";
import type { RecruitingRole } from "./types";

const originalEnv = process.env;

afterEach(() => {
  process.env = originalEnv;
  vi.restoreAllMocks();
});

describe("recruiting roles", () => {
  const role: RecruitingRole = {
    id: 1,
    documentId: "test-role",
    slug: "test-coordinator",
    title: "Test Coordinator",
    isOpen: true,
    roleDetails: [{ id: 1, label: "Location", value: "Remote" }],
    sections: [{ id: 1, heading: "Skills", content: "- Collaboration" }],
    applicationInstructions: "Apply at [our form](https://example.org/apply).",
  };

  function setup(data: RecruitingRole[] = [], status = 200) {
    process.env = {
      ...originalEnv,
      STRAPI_URL: "https://cms.example.org",
      STRAPI_KEY: "test-only-token",
    };
    return vi
      .spyOn(global, "fetch")
      .mockResolvedValue(new Response(JSON.stringify({ data }), { status }));
  }

  it("requests open roles with populated content and newest-first sorting", async () => {
    const olderRole = {
      ...role,
      id: 2,
      documentId: "older-role",
      slug: "older-role",
    };
    const fetchMock = setup([role, olderRole]);

    await expect(getRecruitingRoles()).resolves.toEqual([role, olderRole]);

    const [input, options] = fetchMock.mock.calls[0];
    const url = new URL(String(input));
    expect(url.pathname).toBe("/api/roles");
    expect(url.searchParams.get("filters[isOpen][$eq]")).toBe("true");
    expect(url.searchParams.get("populate[roleDetails]")).toBe("true");
    expect(url.searchParams.get("populate[sections]")).toBe("true");
    expect(url.searchParams.get("sort[0]")).toBe("publishedAt:desc");
    expect(options).toEqual({
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer test-only-token",
      },
    });
  });

  it("requests an open role filtered by slug with populated content", async () => {
    const fetchMock = setup([role]);

    await expect(getRecruitingRole(role.slug)).resolves.toEqual(role);

    const url = new URL(String(fetchMock.mock.calls[0][0]));
    expect(url.pathname).toBe("/api/roles");
    expect(url.searchParams.get("filters[isOpen][$eq]")).toBe("true");
    expect(url.searchParams.get("filters[slug][$eq]")).toBe(role.slug);
    expect(url.searchParams.get("populate[roleDetails]")).toBe("true");
    expect(url.searchParams.get("populate[sections]")).toBe("true");
  });

  it("returns an empty list when there are no open roles", async () => {
    setup();
    await expect(getRecruitingRoles()).resolves.toEqual([]);
  });

  it("returns null when the role is not found", async () => {
    setup();
    await expect(getRecruitingRole("missing")).resolves.toBeNull();
  });

  it("throws when fetching the role list fails", async () => {
    setup([role], 500);
    await expect(getRecruitingRoles()).rejects.toThrow(
      "Failed to fetch recruiting roles: 500",
    );
  });

  it("throws when fetching a role fails", async () => {
    setup([role], 500);
    await expect(getRecruitingRole(role.slug)).rejects.toThrow(
      "Failed to fetch recruiting role: 500",
    );
  });
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
