import React, { useState } from "react";
import CurrentLocation from "./components/currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Developed by{" "}
        <a target="_blank" href="https://vincent-ramirez-portafolio.netlify.app/">
          Vincent Ramirez
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;