import React from "react";
import Attribution from "./components/Attribution";
import Article from "./components/Article";
import Subscribe from "./components/Subscribe";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />
      <div className="my-6 w-80">
        <Article />
        <Subscribe />
        <Attribution />
      </div>
    </div>
  );
}
