import { afterEach, describe, expect, it, vi } from "vitest";

let createSubscriptionMock = vi.fn();

vi.mock("@beehiiv/sdk", () => ({
  BeehiivClient: vi.fn(function () {
    return {
      subscriptions: {
        create: createSubscriptionMock,
      },
    };
  }),
}));

import { NewsletterSignupProps, POST } from "./route";

function createRequestBody(props: Partial<NewsletterSignupProps>) {
  return {
    json: async () => ({
      email: props.email ? props.email : "",
    }),
  } as any;
}

afterEach(() => {
  vi.clearAllMocks();
});

const setup = async () => {
  createSubscriptionMock = vi.fn();

  process.env.BEHIIV_TOKEN = "token";
  process.env.BEHIIV_PUB_KEY = "public_key";

  createSubscriptionMock.mockResolvedValue({ data: { id: "subscription-123" } });

  return { createSubscriptionMock };
};

it("throws when newsletter env vars are missing", async () => {
  delete process.env.BEHIIV_TOKEN;
  delete process.env.BEHIIV_PUB_KEY;

  const requestObj = createRequestBody({ email: "test@example.com" });

  await expect(POST(requestObj)).rejects.toThrow(
    "BEHIIV_TOKEN and/or BEHIIV_PUB_KEY missing from environment variables",
  );
});

it("creates a newsletter subscription and returns response data", async () => {
  const { createSubscriptionMock } = await setup();
  const requestObj = createRequestBody({ email: "test@example.com" });

  const response = await POST(requestObj);
  const body = await response.json();

  expect(response.status).toBe(200);
  expect(body).toEqual({ id: "subscription-123" });
  expect(createSubscriptionMock).toHaveBeenCalledWith("public_key", {
    email: "test@example.com",
    double_opt_override: "on",
    referring_site: "https://distributeaid.org/",
  });
});

it("returns 500 when the Beehiiv client throws", async () => {
  const { createSubscriptionMock } = await setup();
  createSubscriptionMock.mockRejectedValue({ message: "create failed" });
  const requestObj = createRequestBody({ email: "test@example.com" });

  const response = await POST(requestObj);
  const body = await response.json();

  expect(response.status).toBe(500);
  expect(body).toEqual({ error: { message: "create failed" } });
  expect(createSubscriptionMock).toHaveBeenCalled();
});
