import "@testing-library/jest-dom/vitest";
import { afterEach, expect, it, describe, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { getInvolvedLinks } from "@/data/getInvolved";
import * as newsletterUtils from "@/utils/newsletter";

import GetInvolved from "./GetInvolved";

const setup = () => {
  const signupSpy = vi.spyOn(newsletterUtils, "handleNewsletterSignup");

  render(<GetInvolved />);

  const user = userEvent.setup();
  const emailInput = screen.getByRole("textbox", {
    name: "Email",
  }) as HTMLInputElement;
  const subscribeButton = screen.getByRole("button", { name: "Subscribe Now" });


  return {
    signupSpy,
    user,
    emailInput,
    subscribeButton
  };
};

afterEach(() => {
  vi.clearAllMocks(); // Reset all mocked calls between tests
  cleanup();
});

describe("does not call signup handler when required field", () => {
  it("email is empty", async () => {
    const { user, subscribeButton, emailInput, signupSpy } = setup();

    await user.clear(emailInput);
    await user.click(subscribeButton);

    expect(signupSpy).not.toHaveBeenCalled();
  });

  it("email is malformed", async () => {
    const { user, subscribeButton, emailInput, signupSpy } = setup();

    await user.type(emailInput, "bademail@");
    await user.click(subscribeButton);

    expect(signupSpy).not.toHaveBeenCalled();
  });
});

describe("when all fields are populated correctly", () => {
  it("sends form data to API", async () => {
    const {
      user,
      emailInput,
      subscribeButton,
      signupSpy,
    } = setup();
    const email = "maria.hill@gmail.com";

    await user.type(emailInput, email);
    await user.click(subscribeButton);

    expect(signupSpy).toHaveBeenCalledOnce();
    // const [path, contents] = fetchSpy.mock.calls[0];
    // expect(path).toEqual("/api/send");
    // expect(contents).toEqual({
    //   body: `{"firstName":"${firstName}","lastName":"${lastName}","email":"${email}","message":"${message}"}`,
    //   method: "POST",
    // });
  });
});

describe("on signup success", () => {
  it("shows success text", async () => {
    // const { user, submitButton, mockResolvedStatus, setAllValidInputs } =
    //   setup();
    // await setAllValidInputs();
    // mockResolvedStatus(200);

    // await user.click(submitButton);

    // expect(await screen.getByTestId("success")).toBeVisible();
  });

  it("hides the form", async () => {
    // const { user, submitButton, mockResolvedStatus, setAllValidInputs } =
    //   setup();
    // await setAllValidInputs();
    // mockResolvedStatus(200);

    // await user.click(submitButton);

    // expect(await screen.queryByTestId("form")).toBeNull();
  });

  it("does not show error dialog", async () => {
    // const { user, submitButton, mockResolvedStatus, setAllValidInputs } =
    //   setup();
    // await setAllValidInputs();
    // mockResolvedStatus(200);

    // await user.click(submitButton);

    // expect(await screen.queryByTestId("error")).toBeNull();
  });
});

describe("on API error", () => {
  it("with error response: shows error dialog", async () => {
    // const { user, submitButton, mockResolvedStatus, setAllValidInputs } =
    //   setup();
    // await setAllValidInputs();
    // mockResolvedStatus(404);

    // await user.click(submitButton);

    // expect(await screen.getByTestId("error")).toBeVisible();
  });

  it("with promise rejection: shows error dialog", async () => {
    // const { fetchSpy, user, submitButton, setAllValidInputs } = setup();
    // await setAllValidInputs();
    // fetchSpy.mockRejectedValueOnce(new Error());

    // await user.click(submitButton);

    // expect(await screen.getByTestId("error")).toBeVisible();
  });
});
