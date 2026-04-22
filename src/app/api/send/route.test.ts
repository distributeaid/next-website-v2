import { afterEach, beforeEach, expect, it, describe, vi } from "vitest";
import { EmailMessageProps, POST } from "./route";

function createRequestBody(props: EmailMessageProps) {
  return {
    json: async () => ({
      ...props,
    }),
  } as any;
}

describe("when data is incomplete", () => {
  it("when captoken is invalid, returns 403", async () => {
    const requestObj = createRequestBody({
    //   email: "",
    //   firstName: "",
    //   lastName: "",
    //   message: "",
      capToken: "",
    });

    const response = await POST(requestObj);
    const body = await response.json();

    expect(response.status).toBe(403);
    expect(body.error).toBe("Invalid CAPTCHA");
  });
});
