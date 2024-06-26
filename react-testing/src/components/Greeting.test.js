import { screen, render } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("find hello world", () => {
    render(<Greeting />);
    const test = screen.getByText(/Hello world!!/i);
    expect(test).toBeInTheDocument();
  });

  test("Check priti when button not clicked", () => {
    render(<Greeting />);
    const check = screen.getByText("priti", { exact: false });
    expect(check).toBeInTheDocument();
  });

  test("check sagar when button clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const checkInput = screen.getByText("sagar", { exact: false });
    expect(checkInput).toBeInTheDocument();
  });
});
