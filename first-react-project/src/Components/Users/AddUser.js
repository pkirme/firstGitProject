import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enterUserName, setEnterUserName] = useState("");
  const userNameHandler = (event) => {
    setEnterUserName(event.target.value);
  };

  const [enterUserAge, setEnterUserAge] = useState("");
  const userAgeHandler = (event) => {
    setEnterUserAge(event.target.value);
  };

  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterUserName.trim().length === 0 || enterUserAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter valid input(field not be empty)!",
      });
      return;
    }
    if (+enterUserAge < 1) {
      setError({
        title: "Invalid Age!",
        message: "Age not be less than 1!",
      });
      return;
    }
    console.log(enterUserName, enterUserAge);
    props.onAddUser(enterUserName, enterUserAge);
    setEnterUserName("");
    setEnterUserAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enterUserName}
            onChange={userNameHandler}
          ></input>
          <label htmlFor="age">Age(years)</label>
          <input
            type="number"
            id="age"
            value={enterUserAge}
            onChange={userAgeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
