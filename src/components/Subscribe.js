import React, { useState } from "react";

function Subscribe() {
  const [enteredWarning, setWarning] = useState("");
  const [enteredText, setText] = useState("");
  const [isValid, setValid] = useState(true);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const validRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (validRegex.test(enteredText)) {
      console.log(validRegex.test(enteredText));
      setWarning(
        <label className="text-green-300 text-right inline-block">Valid</label>
      );
      setValid(true);
      console.log(`isvalid state is ${isValid}`);
    } else {
      console.log(validRegex.test(enteredText));
      setWarning(
        <label className="text-tomato text-right inline-block">
          Valid email requiered
        </label>
      );
      setValid(false);
      console.log(`isvalid state is ${isValid}`);
    }
  };

  const textHandler = (event) => {
    const enteredmailtext = event.target.value;
    setText(enteredmailtext);
  };

  const clearInput = (event) => {
    event.target.value = "";
    setValid(true);
    setWarning("");
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={formSubmitHandler}>
        <div className="flex flex-row justify-between py-2">
          <label>Email address</label>
          <label>{enteredWarning}</label>
        </div>

        <input
          className={isValid ? "inputField" : "inputField error"}
          type="text"
          placeholder="email@company.com"
          onChange={textHandler}
          onFocus={clearInput}
        />
        <button className="button-bg" type="submit">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
