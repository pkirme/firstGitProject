import React, { useState } from "react";

const Greeting = () => {
  const [text, setText] = useState(false);
  const clickHandler = () => {
    setText(true);
  };
  return (
    <div>
      <h1>Hello world!!</h1>
      {!text && <p>priti kirme</p>}
      {text && <p>sagar</p>}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default Greeting;
