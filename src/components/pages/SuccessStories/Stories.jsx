import { Box, styled, Typography } from "@mui/material";
import React from "react";
import SwiperComp from "./SwiperComp";

const StoryStyle = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(to right,#1E1E1E,#4b4b4b )`,
  ".titleStyle": {
    fontSize: "50px",
    background: "linear-gradient(90deg, #FFE259 0%, #FFA751 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    fontWeight: 600,
    paddingTop: "100px",
    paddingBottom: "30px",
    fontFamily: "Lobster, cursive",
    textAlign: "center",
  },
}));

function Stories() {
  return (
    <StoryStyle>
      <Typography className="titleStyle">Success Stories</Typography>
      <SwiperComp />
    </StoryStyle>
  );
}

export default Stories;
