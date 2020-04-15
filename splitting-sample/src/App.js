import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { useState } from "react";
const SplitMe = React.lazy(() => import("./SplitMe"));

function App() {
  const [visible, setVisivle] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handleClick}>Hello React</p>
        {SplitMe && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
