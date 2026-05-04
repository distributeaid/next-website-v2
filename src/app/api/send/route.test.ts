import { beforeEach, describe, expect, it, vi } from "vitest";

const validateTokenMock = vi.fn();
const sendMock = vi.fn();

vi.mock("../cap/cap", () => ({
  default: vi.fn(async () => ({
    validateToken: validateTokenMock,
  })),
}));

vi.mock("./resend", () => ({
  default: vi.fn(() => ({
    emails: {
      send: sendMock,
    },
  })),
}));

import { EmailMessageProps, POST } from "./route";

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

beforeEach(() => {
  vi.clearAllMocks();
});

const setup = async () => {
  process.env.CONTACT_TO_EMAIL = "contact@example.com";
  process.env.CONTACT_FROM_EMAIL = "from@example.com";

  validateTokenMock.mockResolvedValue({ success: true });
  sendMock.mockResolvedValue({ error: null, data: null } as any);

  return { validateTokenMock, sendMock };
};

it("when captcha token is invalid, returns 403", async () => {
  const { validateTokenMock } = await setup();
  validateTokenMock.mockResolvedValue({ success: false });
  const requestObj = createRequestBody({
    capToken: "invalidtoken",
  });

  const response = await POST(requestObj);
  const body = await response.json();

  expect(response.status).toBe(403);
  expect(body.error).toBe("Invalid CAPTCHA");
});

it("when resend call rejects, returns 500", async () => {
  const { sendMock } = await setup();
  sendMock.mockRejectedValue(new Error("send failed"));
  const requestObj = createRequestBody({ capToken: "validtoken" });

  const response = await POST(requestObj);
  const body = await response.json();

  expect(response.status).toBe(500);
  expect(body).toHaveProperty("error");
});

it("when resend call returns an error, returns 500", async () => {
  const { sendMock } = await setup();
  sendMock.mockResolvedValue({ error: { message: "failed" }, data: null } as any);
  const requestObj = createRequestBody({ capToken: "validtoken" });

  const response = await POST(requestObj);
  const body = await response.json();

  expect(response.status).toBe(500);
  expect(body.error).toEqual({ message: "failed" });
});

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
    const { sendMock } = await setup();
    const requestObj = createRequestBody({
      email: "myemail@email.com",
      firstName: "Firstname",
      lastName: "Lastname",
    });

    await POST(requestObj);

    const { replyTo } = sendMock.mock.lastCall![0];
    expect(replyTo).toEqual("Firstname Lastname <myemail@email.com>");
  });

  it("formats subject with provided name", async () => {
    const { sendMock } = await setup();
    const requestObj = createRequestBody({
      firstName: "Firstname",
      lastName: "Lastname",
      capToken: "validtoken",
    });

    await POST(requestObj);

    const { subject } = sendMock.mock.lastCall![0];
    expect(subject).toBe("You've received message from Firstname Lastname");
  });

  it("formats email body with provided message", async () => {
    const { sendMock } = await setup();
    const requestObj = createRequestBody({
      message: "Hello world",
      capToken: "validtoken",
    });

    await POST(requestObj);

    const { react } = sendMock.mock.lastCall![0];
    expect(react.props.children[0].props.children).toBe("Hello world");
  });

  it("formats email template fromName with provided name", async () => {
    const { sendMock } = await setup();
    const requestObj = createRequestBody({
      firstName: "Firstname",
      lastName: "Lastname",
      capToken: "validtoken",
    });

    await POST(requestObj);

    const { react } = sendMock.mock.lastCall![0];
    expect(react.props.children[2].props.children[0]).toBe("Firstname Lastname");
  });

  it("formats email template fromEmail with provided email", async () => {
    const { sendMock } = await setup();
    const requestObj = createRequestBody({
      email: "myemail@email.com",
      capToken: "validtoken",
    });

    await POST(requestObj);

    const { react } = sendMock.mock.lastCall![0];
    expect(react.props.children[2].props.children[2]).toBe("myemail@email.com");
  });

  it("returns resend data as response body", async () => {
    const { sendMock } = await setup();
    const expectedData = { id: "123" };
    sendMock.mockResolvedValue({ error: null, data: expectedData } as any);

    const requestObj = createRequestBody({ capToken: "validtoken" });
    const response = await POST(requestObj);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual(expectedData);
  });
});
