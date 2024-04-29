/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import Ex from "./Ex";
import userEvent from "@testing-library/user-event";

describe("ExpenseForm component", () => {
  test("Check title", () => {
    render(<Ex />);
    const checkTitle = screen.getByText(/Hi/i);
    expect(checkTitle).toBeInTheDocument();
  });

  test("Check priti when button not clicked", () => {
    render(<Ex />);
    const check = screen.getByText("priti", { exact: false });
    expect(check).toBeInTheDocument();
  });

  test("check sagar when button clicked", () => {
    render(<Ex />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    console.log(buttonElement);
    const checkInput = screen.getByText("sagar", { exact: false });
    expect(checkInput).toBeInTheDocument();
  });
});
