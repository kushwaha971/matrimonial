import React from "react";
import { styled, Box } from "@mui/material";
// import image from "../../images/backgroundImage.png";
// import image1 from "../../images/backgroundImage1.jpg";
import image2 from "../../images/backgroundImage2.jpg";
import Header from "./Header";
import Context from "../../context/Context";
import HomePage from "./HomePage";
 
const HeroStyle = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${image2})`,
  backgroundSize: "120% 100%",
  height: "731px",
  backgroundRepeat: "no-repeat",
  [theme.breakpoints.down("md")]:{
    height: "650px",
  },
}));

function Hero() {
  return (
    <HeroStyle>
      <Context>
        <Header />
        <HomePage />
      </Context>
    </HeroStyle>
  );
}

export default Hero;
