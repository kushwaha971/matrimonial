import React from "react";
import Header from "./Header";
import Context from "../../context/Context";
import HomePage from "./HomePage";
import About from "../AboutUs/About";

function LandingPage() {
  return (
    <React.Fragment>
      <Context>
        <Header />
        <HomePage />
        <About />
      </Context>
    </React.Fragment>
  );
}

export default LandingPage;
