import React, { Component } from "react";
import Tabs from "./components/Tabs";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aperiam!
      </p>
      <div className="box">
        <div>
          <img
            src="https://vannilla-js-basic-project-11-tabs.netlify.app/hero-bcg.jpeg"
            alt="img"
          />
        </div>
        <div>
          <Tabs />
        </div>
      </div>
    </div>
  );
};
export default App;
