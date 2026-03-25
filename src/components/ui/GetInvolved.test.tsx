import "@testing-library/jest-dom/vitest";
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
  const submitButton = screen.getByRole("button", { name: "Subscribe Now" });

  // Utility functions - consider separating these into a dedicated harness if
  // test becomes more complex.
  const setAllValidInputs = async () => {
    await user.type(emailInput, "jane.doe@gmail.com");
  };

  const mockResolvedStatus = (status: number) => {
    fetchSpy.mockResolvedValueOnce(new Response(null, { status }));
  };

  return {
    emailInput,
    fetchSpy,
    mockResolvedStatus,
    setAllValidInputs,
    submitButton,
    user,
  };
};

afterEach(() => {
  vi.clearAllMocks(); // Reset all mocked calls between tests
  cleanup();
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
    const {
      fetchSpy,
      emailInput,
      submitButton,
      user,
    } = setup();
    const email = "maria.hill@gmail.com";

    await user.type(emailInput, email);
    await user.click(submitButton);

    expect(fetchSpy).toHaveBeenCalledOnce();
    const [path, contents] = fetchSpy.mock.calls[0];
    expect(path).toEqual("/api/newsletter");
    expect(contents).toEqual({
      body: `{"email":"${email}"}`,
      method: "POST",
    });
  });
});

// describe("on API success", () => {
//   it("shows success text", async () => {
//     const { user, submitButton, mockResolvedStatus, setAllValidInputs } =
//       setup();
//     await setAllValidInputs();
//     mockResolvedStatus(200);

//     await user.click(submitButton);

//     expect(await screen.getByTestId("success")).toBeVisible();
//   });

//   it("hides the form", async () => {
//     const { user, submitButton, mockResolvedStatus, setAllValidInputs } =
//       setup();
//     await setAllValidInputs();
//     mockResolvedStatus(200);

//     await user.click(submitButton);

//     expect(await screen.queryByTestId("form")).toBeNull();
//   });

//   it("does not show error dialog", async () => {
//     const { user, submitButton, mockResolvedStatus, setAllValidInputs } =
//       setup();
//     await setAllValidInputs();
//     mockResolvedStatus(200);

//     await user.click(submitButton);

//     expect(await screen.queryByTestId("error")).toBeNull();
//   });
// });

// describe("on API error", () => {
//   it("with error response: shows error dialog", async () => {
//     const { user, submitButton, mockResolvedStatus, setAllValidInputs } =
//       setup();
//     await setAllValidInputs();
//     mockResolvedStatus(404);

//     await user.click(submitButton);

//     expect(await screen.getByTestId("error")).toBeVisible();
//   });

//   it("with promise rejection: shows error dialog", async () => {
//     const { fetchSpy, user, submitButton, setAllValidInputs } = setup();
//     await setAllValidInputs();
//     fetchSpy.mockRejectedValueOnce(new Error());

//     await user.click(submitButton);

//     expect(await screen.getByTestId("error")).toBeVisible();
//   });
// });
