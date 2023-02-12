import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="container">
      <div className="container-banner">
        <Banner />
      </div>
      <div className="container-login">
        <Login />
      </div>
    </div>
  );
}

export default App;
