import React, { useState } from "react";
import Attribution from "./components/Attribution";
import Article from "./components/Article";
import Subscribe from "./components/Subscribe";
import Header from "./components/Header";
import Success from "./components/Success";

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [emailAddress, saveEmailAddress] = useState(true);

  const saveValidState = (isValid) => {
    setIsValid(isValid);
  };

  const saveEmail = (email) => {
    saveEmailAddress(email);
  };

  const handleFormSubmit = () => {
    if (isValid) {
      setShowSuccess(true);
    } else {
      setShowSuccess(false);
    }
  };

  return (
    <div>
      {showSuccess ? (
        <div>
          <Success mail={emailAddress} />
          {console.log(`Átvitt success: ${showSuccess}`)}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen mx-auto">
          <div className="flex flex-col bg-white justify-center items-center lg:flex-row-reverse lg:rounded-3xl lg:px-4 lg:py-4">
            <Header />
            <div className="mx-auto lg:w-2/4">
              <Article />
              <Subscribe
                saveState={saveValidState}
                saveMail={saveEmail}
                onSubmit={handleFormSubmit}
              />
              <Attribution />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
