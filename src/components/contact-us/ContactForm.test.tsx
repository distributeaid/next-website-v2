import { useEffect } from "react";
import "@testing-library/jest-dom/vitest";
import { afterEach, expect, it, describe, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

const setup = () => {
  const fetchSpy = vi.spyOn(global, "fetch");

  render(<ContactForm />);

  vi.mock("./CapWidget", () => ({
    default: ({ onVerified }: { onVerified: (t: string) => void }) => {
      // mockInput(props);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        // This seems to get called no matter what, which is fine for now
        // but we might want to actually test success vs failure later
        onVerified("12345captcha_token");
      });
      return (
        <div>
          <span>Stub captcha</span>
          <input type="checkbox" id="captcha"></input>
          <label htmlFor="captcha">Fake captcha</label>
        </div>
      );
    },
  }));

  const user = userEvent.setup();
  const firstNameInput = screen.getByRole("textbox", {
    name: "First Name",
  }) as HTMLInputElement;
  const lastNameInput = screen.getByRole("textbox", {
    name: "Last Name",
  }) as HTMLInputElement;
  const emailInput = screen.getByRole("textbox", {
    name: "Email Address",
  }) as HTMLInputElement;
  const messageInput = screen.getByRole("textbox", {
    name: "Your Message",
  }) as HTMLInputElement;
  const submitButton = screen.getByRole("button", { name: "Send message" });

  // Utility functions - consider separating these into a dedicated harness if
  // test becomes more complex.
  const setAllValidInputs = async () => {
    await user.type(firstNameInput, "Jane");
    await user.type(lastNameInput, "Doe");
    await user.type(emailInput, "jane.doe@gmail.com");
    await user.type(messageInput, "My message here");
  };

  const mockResolvedStatus = (status: number) => {
    fetchSpy.mockResolvedValueOnce(new Response(null, { status }));
  };

  return {
    fetchSpy,
    user,
    firstNameInput,
    lastNameInput,
    emailInput,
    messageInput,
    submitButton,
    mockResolvedStatus,
    setAllValidInputs,
  };
};

afterEach(() => {
  vi.clearAllMocks(); // Reset all mocked calls between tests
  cleanup();
});

describe("does not call post API when required field", () => {
  it("first name is empty", async () => {
    const { user, submitButton, setAllValidInputs, firstNameInput } = setup();
    await setAllValidInputs();

    await user.clear(firstNameInput);
    await user.click(submitButton);

    expect(fetch).not.toHaveBeenCalled();
  });

  it("last name is empty", async () => {
    const { user, submitButton, setAllValidInputs, lastNameInput } = setup();
    await setAllValidInputs();

    await user.clear(lastNameInput);
    await user.click(submitButton);

    expect(fetch).not.toHaveBeenCalled();
  });

  it("message is empty", async () => {
    const { user, submitButton, setAllValidInputs, messageInput } = setup();
    await setAllValidInputs();

    await user.clear(messageInput);
    await user.click(submitButton);

    expect(fetch).not.toHaveBeenCalled();
  });

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
      user,
      firstNameInput,
      lastNameInput,
      messageInput,
      emailInput,
      submitButton,
      fetchSpy,
    } = setup();
    const firstName = "Maria";
    const lastName = "Hill";
    const email = "maria.hill@gmail.com";
    const message = "Maria's message here";

    await user.type(firstNameInput, firstName);
    await user.type(lastNameInput, lastName);
    await user.type(emailInput, email);
    await user.type(messageInput, message);
    await user.click(submitButton);

    expect(fetchSpy).toHaveBeenCalledOnce();
    const [path, contents] = fetchSpy.mock.calls[0];
    expect(path).toEqual("/api/send");
    expect(contents).toEqual({
      body: `{"firstName":"${firstName}","lastName":"${lastName}","email":"${email}","message":"${message}","capToken":"12345captcha_token"}`,
      method: "POST",
    });
  });
});

describe("on API success", () => {
  it("shows success text", async () => {
    const { user, submitButton, mockResolvedStatus, setAllValidInputs } =
      setup();
    await setAllValidInputs();
    mockResolvedStatus(200);

    await user.click(submitButton);

    expect(await screen.getByTestId("success")).toBeVisible();
  });

  it("hides the form", async () => {
    const { user, submitButton, mockResolvedStatus, setAllValidInputs } =
      setup();
    await setAllValidInputs();
    mockResolvedStatus(200);

    await user.click(submitButton);

    expect(await screen.queryByTestId("form")).toBeNull();
  });

  it("does not show error dialog", async () => {
    const { user, submitButton, mockResolvedStatus, setAllValidInputs } =
      setup();
    await setAllValidInputs();
    mockResolvedStatus(200);

    await user.click(submitButton);

    expect(await screen.queryByTestId("error")).toBeNull();
  });
});

describe("on API error", () => {
  it("with error response: shows error dialog", async () => {
    const { user, submitButton, mockResolvedStatus, setAllValidInputs } =
      setup();
    await setAllValidInputs();
    mockResolvedStatus(404);

    await user.click(submitButton);

    expect(await screen.getByTestId("error")).toBeVisible();
  });

  it("with promise rejection: shows error dialog", async () => {
    const { fetchSpy, user, submitButton, setAllValidInputs } = setup();
    await setAllValidInputs();
    fetchSpy.mockRejectedValueOnce(new Error());

    await user.click(submitButton);

    expect(await screen.getByTestId("error")).toBeVisible();
  });
});
