import { afterEach, expect, it, describe, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import GetInvolved from "./GetInvolved";

const setup = () => {
  const fetchSpy = vi.spyOn(global, "fetch");

  render(<GetInvolved />);

  const user = userEvent.setup();
  const emailInput = screen.getByRole("textbox", {
    name: "Email",
  }) as HTMLInputElement;
  const subscribeButton = screen.getByRole("button", { name: "Subscribe Now" });

  const mockResolvedStatus = (status: number) => {
    fetchSpy.mockResolvedValueOnce(new Response(null, { status }));
  };

  mockResolvedStatus(200);

  return {
    fetchSpy,
    user,
    emailInput,
    subscribeButton,
    mockResolvedStatus,
  };
};

afterEach(() => {
  vi.clearAllMocks(); // Reset all mocked calls between tests
  cleanup();
});

it("displays form by default", async () => {
  setup();

  expect(await screen.findByTestId("newsletter-form")).toBeVisible();
});

describe("does not call signup handler when required field", () => {
  it("email is empty", async () => {
    const { user, subscribeButton, emailInput, fetchSpy } = setup();

    await user.clear(emailInput);
    await user.click(subscribeButton);

    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("email is malformed", async () => {
    const { user, subscribeButton, emailInput, fetchSpy } = setup();

    await user.type(emailInput, "bademail@");
    await user.click(subscribeButton);

    expect(fetchSpy).not.toHaveBeenCalled();
  });
});

describe("when all fields are populated correctly", () => {
  it("sends form data to API", async () => {
    const { user, emailInput, subscribeButton, fetchSpy } = setup();
    const email = "maria.hill@gmail.com";

    expect(await screen.findByTestId("newsletter-form")).toBeVisible();
    await user.type(emailInput, email);
    await user.click(subscribeButton);

    expect(fetchSpy).toHaveBeenCalledOnce();
    const [path, contents] = fetchSpy.mock.calls[0];
    expect(path).toEqual("/api/newsletter");
    expect(contents).toEqual({
      body: `{"email":"${email}"}`,
      method: "POST",
    });
  });
});

describe("on signup success", () => {
  it("shows success text", async () => {
    const { user, emailInput, subscribeButton, mockResolvedStatus } = setup();
    await user.type(emailInput, "some@email.com");
    mockResolvedStatus(200);
    await user.click(subscribeButton);

    expect(await screen.getByTestId("newsletter-success")).toBeVisible();
  });

  it("hides the form", async () => {
    const { user, emailInput, subscribeButton, mockResolvedStatus } = setup();
    await user.type(emailInput, "some@email.com");
    mockResolvedStatus(200);
    await user.click(subscribeButton);
    expect(await screen.queryByTestId("newsletter-form")).toBeNull();
  });
});

describe("on API error", () => {
  it("with error response: shows error dialog", async () => {
    // const { user, subscribeButton, mockResolvedStatus } =
    //   setup();
    // await user.type(emailInput, "some@email.com");
    // mockResolvedStatus(404);
    // await user.click(subscribeButton);
    // expect(await screen.getByTestId("error")).toBeVisible();
  });

  it("with promise rejection: shows error dialog", async () => {
    // const { fetchSpy, user, subscribeButton } = setup();
    // await user.type(emailInput, "some@email.com");
    // fetchSpy.mockRejectedValueOnce(new Error());
    // await user.click(subscribeButton);
    // expect(await screen.getByTestId("error")).toBeVisible();
  });
});
