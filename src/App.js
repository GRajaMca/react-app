import logo from './logo.svg';
import React, { useEffect } from "react";

import './App.css';

function App() {
  let message = "test";
  useEffect(() => {
    fetch("/sample-end-point")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {message}
        </a>
      </header>
    </div>
  );
}

export default App;
