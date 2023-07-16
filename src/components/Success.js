import React from "react";

function Success(props) {
  return (
    <div className="flex flex-col xl:flex-row-reverse items-center justify-center h-screen mx-auto w-96 lg:w-[641px]">
      <div className="flex flex-col bg-white justify-center items-center lg:rounded-[40px]">
        <form action="index.html">
          <div className="my-6 px-6 lg:py-10 lg:px-20">
            <svg
              className="lg:w-[100px] lg:h-[100px]"
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="61"
              viewBox="0 0 21 21">
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <h1 className="mt-10 lg:text-7xl">Thanks for subscribing!</h1>
            <p className="lg:text-xl lg: pt-6">
              A confirmation email has been sent to{" "}
              <span className="bold">{props.mail}</span>. Please open it and
              click the button inside to confirm your subscription
            </p>
            <button
              type="submit"
              className="button-bg mt-60 lg:mt-24 hover:bg-tomato lg:text-xl">
              Dismiss message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Success;
