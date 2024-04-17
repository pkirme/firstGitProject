import { render, screen } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm";

describe("ExpenseForm component", () => {
  test("Check title", () => {
    render(<ExpenseForm />);
    const checkTitle = screen.getByText(/Expense/i);
    expect(checkTitle).toBeInTheDocument();
  });
});
