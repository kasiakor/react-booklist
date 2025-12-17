import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Register from "./Register";

describe("Register component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the form fields and button", () => {
    render(<Register />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/uk mobile number/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /register/i })
    ).toBeInTheDocument();
  });

  it("shows error for invalid username and clears on valid input", async () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText(/username/i);

    fireEvent.change(usernameInput, { target: { value: "short" } });
    expect(
      screen.getByText(
        /username must be at least 8 characters, include uppercase, lowercase, number, and special character/i
      )
    ).toBeInTheDocument();

    fireEvent.change(usernameInput, { target: { value: "Valid1@me" } });
    await waitFor(() =>
      expect(
        screen.queryByText(
          /username must be at least 8 characters, include uppercase, lowercase, number, and special character/i
        )
      ).not.toBeInTheDocument()
    );
  });

  it("shows error for invalid mobile and clears on valid input", () => {
    render(<Register />);
    const mobileInput = screen.getByLabelText(/uk mobile number/i);

    fireEvent.change(mobileInput, { target: { value: "12345" } });
    expect(
      screen.getByText(/enter a valid uk mobile number/i)
    ).toBeInTheDocument();

    fireEvent.change(mobileInput, { target: { value: "07123 456789" } });
    expect(
      screen.queryByText(/enter a valid uk mobile number/i)
    ).not.toBeInTheDocument();
  });

  it("does not call alert if fields are invalid", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<Register />);
    fireEvent.click(screen.getByRole("button", { name: /register/i }));
    expect(alertMock).not.toHaveBeenCalled();
  });

  it("calls alert if fields are valid", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<Register />);
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "Valid1@me" },
    });
    fireEvent.change(screen.getByLabelText(/uk mobile number/i), {
      target: { value: "07123 456789" },
    });
    fireEvent.click(screen.getByRole("button", { name: /register/i }));
    expect(alertMock).toHaveBeenCalledWith("Registration successful!");
  });
});
