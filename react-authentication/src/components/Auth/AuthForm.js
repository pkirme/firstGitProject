import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let url;

    try {
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBhWgo-onnehVfjggey6b2N9Rel6F0txZc";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBhWgo-onnehVfjggey6b2N9Rel6F0txZc";
      }

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        header: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        const data = await response.json();
        let errorMsg = "Authentication Fail!!";
        // if (data && data.error && data.error.message) {
        //   errorMsg = data.error.message;
        // }
        // alert(errorMsg);
        throw new Error(errorMsg);
      }
    } catch (error) {
      alert(error.message);
    }

    setIsLoading(false);
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>

        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Sign In" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
