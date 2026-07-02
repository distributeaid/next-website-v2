import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NewsletterArchiveProvider } from "./NewsletterArchiveProvider";

const cleanupEnv = () => {
  delete process.env.BEHIIV_TOKEN;
  delete process.env.BEHIIV_PUB_KEY;
};

afterEach(() => {
  vi.clearAllMocks();
  vi.unstubAllGlobals();
  cleanupEnv();
});

describe("NewsletterArchiveProvider", () => {
  it("throws when required environment variables are missing", () => {
    cleanupEnv();

    expect(() => new NewsletterArchiveProvider()).toThrow(
      "BEHIIV_TOKEN and/or BEHIIV_PUB_KEY missing from environment variables",
    );
  });

  describe("listPublications", () => {
    let provider: NewsletterArchiveProvider;

    beforeEach(() => {
      process.env.BEHIIV_TOKEN = process.env.BEHIIV_TOKEN;
      process.env.BEHIIV_PUB_KEY = process.env.BEHIIV_PUB_KEY;
      provider = new NewsletterArchiveProvider();
    });

    it("makes authenticated request using env vars and returns JSON data", async () => {
      const mockResponse = { data: [{ id: "post-1" }] };
      const mockFetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve(mockResponse),
      });
      vi.stubGlobal("fetch", mockFetch);

      const result = await provider.listPublications({ page: 1 });

      expect(result).toEqual(mockResponse);
    });
  });

  describe("getPost", () => {
    const TEST_POST_ID = "post_d5d23ce5-37eb-4ddc-875c-48ed66f68f05";
    let provider: NewsletterArchiveProvider;

    beforeEach(() => {
      process.env.BEHIIV_TOKEN = process.env.BEHIIV_TOKEN;
      process.env.BEHIIV_PUB_KEY = process.env.BEHIIV_PUB_KEY;
      provider = new NewsletterArchiveProvider();
    });

    it("makes authenticated request using env vars with post ID and returns JSON data", async () => {
      const mockResponse = { id: TEST_POST_ID, title: "Test Post" };
      const mockFetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve(mockResponse),
      });
      vi.stubGlobal("fetch", mockFetch);

      const result = await provider.getPost(TEST_POST_ID);

      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining(TEST_POST_ID),
        {
          headers: {
            Authorization: process.env.BEHIIV_TOKEN,
          },
        },
      );
      expect(result).toEqual(mockResponse);
    });
  });
});
