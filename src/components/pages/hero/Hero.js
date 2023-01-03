import React from "react";
import { styled, Box } from "@mui/material";
import image from "../../images/backgroundImage.png";

import Header from "./Header";

const HeroStyle = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: "auto 100%",
  backgroundRepeat: "no-repeat",
  [theme.breakpoints.down("md")]: {
    backgroundSize: "auto 50%",
  },
}));

function Hero() {
  return (
    <HeroStyle>
      <Header />
      <Box sx={{ margin: "52px", marginTop: "1000px" }}>Akash</Box>
    </HeroStyle>
  );
}

export default Hero;
