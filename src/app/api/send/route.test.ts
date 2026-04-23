import { expect, it, describe, vi } from "vitest";
import { EmailMessageProps, POST } from "./route";
import getCap from "../cap/cap";
import getResend from "./resend";

function createRequestBody(props: Partial<EmailMessageProps>) {
  return {
    json: async () => ({
      email: props.email ? props.email : "",
      firstName: props.firstName ? props.firstName : "",
      lastName: props.lastName ? props.lastName : "",
      message: props.message ? props.message : "",
      capToken: props.capToken ? props.capToken : "",
    }),
  } as any;
}

const setup = async () => {
  const cap = await getCap();
  const capSpy = vi.spyOn(cap, "validateToken");
  // Validate CAPTCHA for most test cases
  capSpy.mockResolvedValue({ success: true });
  const resend = getResend();
  const sendEmailsSpy = vi.spyOn(resend.emails, "send");
  sendEmailsSpy.mockResolvedValue({ error: null, data: null } as any);

  return { capSpy, sendEmailsSpy };
};

it("when captcha token is invalid, returns 403", async () => {
  const { capSpy } = await setup();
  capSpy.mockResolvedValue({ success: false });
  const requestObj = createRequestBody({
    capToken: "invalidtoken",
  });

  const response = await POST(requestObj);
  const body = await response.json();

  expect(response.status).toBe(403);
  expect(body.error).toBe("Invalid CAPTCHA");
});

// TODO: add the following tests
it("when resend call rejects, returns 500", async () => {});
it("when resend call returns an error, returns 500", async () => {});

describe("when request data is valid", () => {
  it("returns 200", async () => {
    await setup();
    const requestObj = createRequestBody({
      capToken: "validtoken",
    });

    const response = await POST(requestObj);

    expect(response.status).toBe(200);
  });

  it("formats replyTo field using provided email and name", async () => {
    const { sendEmailsSpy } = await setup();
    const requestObj = createRequestBody({
      email: "myemail@email.com",
      firstName: "Firstname",
      lastName: "Lastname",
    });

    await POST(requestObj);

    const { replyTo } = sendEmailsSpy.mock.lastCall![0];
    expect(replyTo).toEqual("Firstname Lastname <myemail@email.com>");
  });

  // TODO: add the following tests
  it("formats subject with provided name", async () => {});
  it("formats email body with provided message", async () => {});
  it("formats email template fromName with provided name", async () => {});
  it("formats email template fromEmail with provided email", async () => {});
  it("returns resend data as response body", async () => {});
});
