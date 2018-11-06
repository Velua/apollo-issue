import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dogs from "./Dogs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Dogs />
        </header>
      </div>
    );
  }
}

export default App;
