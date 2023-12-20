import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  //using ref
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const clgInputRef = useRef();

  // //using state.
  // const [enterUserName, setEnterUserName] = useState("");
  // const userNameHandler = (event) => {
  //   setEnterUserName(event.target.value);
  // };

  // const [enterUserAge, setEnterUserAge] = useState("");
  // const userAgeHandler = (event) => {
  //   setEnterUserAge(event.target.value);
  // };

  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enterUserName = nameInputRef.current.value;
    const enterUserAge = ageInputRef.current.value;
    const enterUserClgName = clgInputRef.current.value;

    if (
      enterUserName.trim().length === 0 ||
      enterUserAge.trim().length === 0 ||
      enterUserClgName.trim().length === 0
    ) {
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
    props.onAddUser(enterUserName, enterUserAge,enterUserClgName);

    //Reset value
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    clgInputRef.current.value = "";
    // setEnterUserName("");
    // setEnterUserAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            // value={enterUserName}
            // onChange={userNameHandler}
            ref={nameInputRef}
          ></input>

          <label htmlFor="age">Age(years)</label>
          <input
            type="number"
            id="age"
            // value={enterUserAge}
            // onChange={userAgeHandler}
            ref={ageInputRef}
          ></input>

          <label htmlFor="clgName">College Name</label>
          <input
            type="text"
            id="clgName"
            // value={enterUserAge}
            // onChange={userAgeHandler}
            ref={clgInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
