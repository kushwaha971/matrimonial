import { Box, styled, Typography } from "@mui/material";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

const FooterStyle = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(to right,#1E1E1E,#4b4b4b )`,
  ".copyrightStyle": {
    color: "white",
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "18px",
    textAlign: "center",
    padding: "40px",
  },
}));

function Footer() {
  return (
    <FooterStyle>
      <Typography className="copyrightStyle">
        <CopyrightIcon sx={{ verticalAlign: "middle" }} /> Copyrights
        VTUShaadi.com 2023
      </Typography>
      {/* <Typography>VTUShaadi.com has no affiliation with Shaadi.com or any other materimonial site </Typography> */}
    </FooterStyle>
  );
}

export default Footer;
