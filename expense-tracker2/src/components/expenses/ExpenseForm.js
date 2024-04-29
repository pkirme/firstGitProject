import React, { useRef, useState } from "react";

import { Form, Col, Row, Container, Button } from "react-bootstrap";

import ExpenseList from "./ExpenseList";

import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../../store/expense";

// import axios from "axios";

const ExpenseForm = () => {
  // const url = `https://expensetracker-8fe52-default-rtdb.firebaseio.com`;

  const spentMoneyInputRef = useRef();
  const descriptionInputRef = useRef();
  const selectInputRef = useRef("select");
  const [Id, setId] = useState(null);

  const dispatch = useDispatch();
  // const isAuth = useSelector((state) => state.auth.isLoggedIn);

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    const money = spentMoneyInputRef.current.value;
    const description = descriptionInputRef.current.value;
    const category = selectInputRef.current.value;

    console.log(money, description, category);

    try {
      if (Id === null) {
        const expense = {
          id: Date.now().toString(),
          money,
          description,
          category,
        };
        console.log(expense);
        dispatch(expenseActions.addExpense(expense));
      } else {
        const expense = {
          id: Id,
          money,
          description,
          category,
        };
        dispatch(expenseActions.updateExpense(expense));
        setId(null);
      }
    } catch (error) {}

    spentMoneyInputRef.current.value = "";
    descriptionInputRef.current.value = "";
    selectInputRef.current.value = "Select";
  };

  const onEditHandler = (expense) => {
    spentMoneyInputRef.current.value = expense.money;
    descriptionInputRef.current.value = expense.description;
    selectInputRef.current.value = expense.category;

    setId(expense.id);
  };

  const onDeleteHandler = async (id) => {
    dispatch(expenseActions.removeExpense(id));
  };

  const expensesList = useSelector((state) => state.expense.expenses);
  const onDownloadHandler = () => {
    let csvContent = "Category,Description,Amount\n"; // CSV header
    expensesList.forEach((expense) => {
      csvContent += `${expense.category},${expense.description},${expense.money}\n`;
    });

    // Create a Blob with the CSV data
    const blob = new Blob([csvContent]);

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create an anchor element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "expenses.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10} className="mx-auto">
          <div style={{ background: "white" }}>
            <div className="card border-primary">
              <div className="card-body">
                <h4 className="card-title text-center">Expense</h4>
                <hr />
                <Form onSubmit={onFormSubmitHandler}>
                  <Form.Group className="mb-3" controlId="spentMoney">
                    <Form.Label>Money</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Add Expense money."
                      ref={spentMoneyInputRef}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Add Description here."
                      ref={descriptionInputRef}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      ref={selectInputRef}
                    >
                      <option>Select</option>
                      <option value="petrol">Petrol</option>
                      <option value="rent">Rent</option>
                      <option value="food">Food</option>
                      <option value="shopping">Shopping</option>
                    </Form.Select>
                  </Form.Group>

                  <div className="d-grid gap-2 my-2">
                    <Button variant="primary" type="submit">
                      Add Expense
                    </Button>
                  </div>
                </Form>
                <div className="d-grid gap-2 my-2">
                  <Button
                    variant="success"
                    type="link"
                    onClick={onDownloadHandler}
                  >
                    Download Expenses
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10} className="mx-auto">
          <div style={{ background: "white" }}>
            <div className="card border-primary">
              <div className="card-body">
                <ExpenseList
                  onEdit={onEditHandler}
                  onDelete={onDeleteHandler}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExpenseForm;
