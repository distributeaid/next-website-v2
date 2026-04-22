import { afterEach, beforeEach, expect, it, describe, vi } from "vitest";
import { EmailMessageProps, POST } from "./route";
import getCap from "../cap/cap";
import getResend from "./resend";

function createRequestBody(props: EmailMessageProps) {
  return {
    json: async () => ({
      ...props,
    }),
  } as any;
}

it("when captoken is invalid, returns 403", async () => {
  const requestObj = createRequestBody({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
    capToken: "",
  });

  const response = await POST(requestObj);
  const body = await response.json();

  expect(response.status).toBe(403);
  expect(body.error).toBe("Invalid CAPTCHA");
});

it("when data is valid, sends message", async () => {
  const cap = await getCap();
  const capSpy = vi.spyOn(cap, 'validateToken');
  capSpy.mockResolvedValue({ success: true });
  const resend = getResend();
  const sendEmailsSpy = vi.spyOn(resend.emails, 'send');
  sendEmailsSpy.mockResolvedValue({error: null, data: null} as any);
  const requestObj = createRequestBody({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
    capToken: "",
  });

  const response = await POST(requestObj);
  const body = await response.json();

  console.log(body);
  expect(response.status).toBe(200);
});
