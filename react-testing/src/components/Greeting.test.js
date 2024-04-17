import { screen, render } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("find hello world", () => {
    render(<Greeting />);
    const test = screen.getByText(/Hello world!!/i);
    expect(test).toBeInTheDocument();
  });
});
