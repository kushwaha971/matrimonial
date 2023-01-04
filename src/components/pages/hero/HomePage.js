import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { userContext } from "../../context/Context";

const HomePageStyle = styled(Box)(({ theme }) => ({
  ".title-style": {
    width: "40%",
    color: "white",
    margin: "auto",
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "40px",
    [theme.breakpoints.down("md")]: {
      width: "70%",
      fontSize: "20px",
    },
  },
  ".Sub-title-style": {
    width: "40%",
    color: "#dd2c00",
    margin: "auto",
    textAlign: "center",
    marginTop: "20px",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "30px",
    [theme.breakpoints.down("md")]: {
      width: "70%",
      fontSize: "18px",
    },
  },
  ".box-container-style": {
    width: "50%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    marginTop: "90px",
    padding: "18px",
    backgroundColor: "#bf360c",
    borderRadius: "15px",
    [theme.breakpoints.down("md")]: {
      marginTop: "50px",
      width: "100%",
      flexDirection: "column",
      padding: "10px 0px ",
      borderRadius: "10px",
    },
  },
  ".box-container-text-style": {
    width: "60%",
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "25px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "10px 0px",
      fontSize: "20px",
    },
  },
  ".btnStyle": {
    margin: "auto",
    padding: "10px 70px",
    border: "1px solid white",
    fontFamily: "Roboto",
    textTransform: "capitalize",
    backgroundColor: "#bf360c",
    "&:hover": {
      backgroundColor: "white",
      color: "#9e9e9e",
    },
  },
}));

function HomePage() {
  const context = React.useContext(userContext);
  const handleButton = () => {
    context.handleSignUp();
    context.handleLogin();
  };
  return (
    <React.Fragment>
      <HomePageStyle>
        <Typography className="title-style">
          We bring people together. Love unites them...
        </Typography>
        <Typography className="Sub-title-style">
          Find your Special Someone!
        </Typography>
        <Box className="box-container-style">
          <Typography className="box-container-text-style">
            Your story is waiting to happen!
          </Typography>
          <Button
            variant="contained"
            className="btnStyle"
            onClick={handleButton}
          >
            Get Started <ChevronRightIcon />
          </Button>
        </Box>
      </HomePageStyle>
    </React.Fragment>
  );
}

export default HomePage;
