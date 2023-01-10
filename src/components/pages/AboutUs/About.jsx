import { Avatar, Box, Divider, styled, Typography } from "@mui/material";
import React from "react";
import logo from "../../images/BirdLogo.png";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const AboutStyle = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(to right,#1E1E1E,#4b4b4b )`,
  ".imgStyle": {
    width: "300px",
    height: "200px",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "50px",
    [theme.breakpoints.down("md")]: {
      width: "150px",
      height: "150px",
    },
  },
  ".textContainer": {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  },
  ".textStyle": {
    fontFamily: "Poppins",
    fontSize: "20px",
    color: "#f5f5f5",
    textAlign: "center",
    marginBottom: "55px",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
    },
  },
  ".subContainer": {
    display: "flex",
    margin: "5px",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-around",
    width: "50%",
    marginTop: "55px",
    color: "#f5f5f5",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  ".avtarStyle": {
    marginLeft: "auto",
    marginRight: "auto",
    color: "#e64a19",
    marginTop: "30px",
  },
}));

function About() {
  return (
    <AboutStyle>
      <Box>
        <img src={logo} alt="VTU Shaadi.com" className="imgStyle" />
        <Box className="textContainer">
          <Typography className="textStyle">
            VTUshaadi.com is a social networking site specialising in
            matchmaking and not just a matrimonial service. VTUshaadi.com has
            always differentiated itself from other matrimonials through its
            innovation-led approach. By redefining the way Indian brides and
            grooms meet for marriage, VTUshaadi.com has created a world-renowned
            brand that has changed the way of finding a life partner. One of the
            biggest differentiators of our website, other than its niche
            segment, is that we authenticate each profile on the basis of
            education by screening their institution’s degree, ID-card/mark
            sheet etc. And dating facility is also available here.
          </Typography>

          <Typography
            sx={{
              margin: "auto",
              background: "red",
              padding: "15px",
              borderRadius: "5px",
              fontFamily: "Lobster, cursive",
              fontSize: "20px",
              fontWeight: 600,
              color: "#f5f5f5",
            }}
          >
            Trusted by Thousands
          </Typography>
          <Divider />
          <Box className="subContainer">
            <Typography sx={{ marginLeft: "auto", marginRight: "auto" }}>
              <Avatar className="avtarStyle">
                <GroupOutlinedIcon />
              </Avatar>
              Best Matches
            </Typography>
            <Typography sx={{ marginLeft: "auto", marginRight: "auto" }}>
              <Avatar className="avtarStyle">
                <LockOutlinedIcon />
              </Avatar>
              100% Privacy
            </Typography>
            <Typography sx={{ marginLeft: "auto", marginRight: "auto" }}>
              <Avatar className="avtarStyle">
                <VerifiedUserOutlinedIcon />
              </Avatar>
              Verified Profiles
            </Typography>
            <Divider />
          </Box>
        </Box>
      </Box>
    </AboutStyle>
  );
}

export default About;
