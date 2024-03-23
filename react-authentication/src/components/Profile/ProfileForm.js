import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordRef = useRef();
  const authCtx = useContext(AuthContext);

  const onPasswordChangeHandler = async (e) => {
    e.preventDefault();
    const enteredPassword = newPasswordRef.current.value;
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBhWgo-onnehVfjggey6b2N9Rel6F0txZc",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (response.ok) {
      history.replace("/");
    }
  };

  return (
    <form className={classes.form} onSubmit={onPasswordChangeHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
