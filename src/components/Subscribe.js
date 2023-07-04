import React from "react";

function Subscribe() {
  return (
    <div>
      <form className="flex flex-col">
        <label>Email address</label>
        <input
          className="inputField"
          type="text"
          placeholder="email@company.com"
        />
        <button className="button-bg" type="submit">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
