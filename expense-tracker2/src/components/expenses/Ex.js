import React from "react";
import { useState } from "react";

const Ex = () => {
  const [text, setText] = useState(false);
  const clickHandler = () => {
    setText(true);
  };
  return (
    <div>
      <p>Hi</p>

      <p>priti</p>
      {text && <h1>sagar</h1>}

      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default Ex;
