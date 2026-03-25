import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, expect, it, describe, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GetInvolved from "./GetInvolved";

const setup = () => {
  render(<GetInvolved />);

  const user = userEvent.setup();
  const emailInput = screen.getByRole("textbox", {
    name: "Email",
  }) as HTMLInputElement;
  const submitButton = screen.getByRole("button", { name: "Subscribe Now" });

  // Utility functions - consider separating these into a dedicated harness if
  // test becomes more complex.
  const setAllValidInputs = async () => {
    await user.type(emailInput, "fish.crow@example.com");
  };

  return {
    emailInput,
    setAllValidInputs,
    submitButton,
    user,
  };
};

afterEach(() => {
  vi.clearAllMocks(); // Reset all mocked calls between tests
  vi.unstubAllGlobals();
  cleanup();
});

describe("calls the API correctly", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn((input: URL | RequestInfo, init?: RequestInit | undefined) => {
        const res = new Response();
        return Promise.resolve(res);
      }),
    );
  });
  describe("does not call post API when required field", () => {
    it("email is empty", async () => {
      const { user, submitButton, setAllValidInputs, emailInput } = setup();

      await setAllValidInputs();

      await user.clear(emailInput);
      await user.click(submitButton);

      expect(fetch).not.toHaveBeenCalled();
    });

    it("email is malformed", async () => {
      const { user, submitButton, setAllValidInputs, emailInput } = setup();

      await setAllValidInputs();

      await user.clear(emailInput);
      await user.type(emailInput, "bademail@");
      await user.click(submitButton);

      expect(fetch).not.toHaveBeenCalled();
    });
  });

  describe("when all fields are populated correctly", () => {
    it("sends form data to API", async () => {
      const { emailInput, submitButton, user } = setup();

      const email = "fish.crow@example.com";

      await user.type(emailInput, email);
      await user.click(submitButton);

      expect(fetch).toHaveBeenCalledOnce();
      expect(fetch).toHaveBeenCalledWith("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: email }),
      });
    });
  });
});

describe("on API success", () => {
  beforeEach(() =>
    vi.stubGlobal(
      "fetch",
      vi.fn((input: URL | RequestInfo, init?: RequestInit | undefined) => {
        // 200 is the default but explicit is better than implicit (wrong language?)
        const res = new Response(null, { status: 200 });
        return Promise.resolve(res);
      }),
    ),
  );
  it("shows success text", async () => {
    const { user, submitButton, setAllValidInputs } = setup();
    await setAllValidInputs();

    await user.click(submitButton);

    expect(await screen.getByText("Success!")).toBeVisible();
  });

  it("hides the form", async () => {
    const { user, submitButton, setAllValidInputs } = setup();
    await setAllValidInputs();

    await user.click(submitButton);

    expect(
      await screen.queryByRole("button", { name: "Subscribe Now" }),
    ).toBeNull();
  });
});
