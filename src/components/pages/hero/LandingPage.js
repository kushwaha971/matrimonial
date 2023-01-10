import React from "react";
import Header from "./Header";
import Context from "../../context/Context";
import HomePage from "./HomePage";
import About from "../AboutUs/About";
import Stories from "../SuccessStories/Stories";
import Footer from "../../footer/Footer";

function LandingPage() {
  return (
    <React.Fragment>
      <Context>
      <Header />
       <section id="home"><HomePage /></section> 
        
       <section id="about"> <About /></section>
       <section id="stories"><Stories /></section>
        <Footer/> 
      </Context>
    </React.Fragment>
  );
}

export default LandingPage;
