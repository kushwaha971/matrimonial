import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { userContext } from "../../context/Context";

const HomePageStyle = styled(Box)(({ theme }) => ({
  ".titleStyle": {
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
  ".SubTitleStyle": {
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
  ".boxContainerStyle": {
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
  ".boxContainerTextStyle": {
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
  const contextData = React.useContext(userContext);
  const handleButton = () => {
    contextData.handleSignUp();
    contextData.handleLogin();
  };

  return (
    <React.Fragment>
      <HomePageStyle>
        <Typography className="titleStyle">
          We bring people together. Love unites them...
        </Typography>
        <Typography className="SubTitleStyle">
          Find your Special Someone!
        </Typography>
        <Box className="boxContainerStyle">
          <Typography className="boxContainerTextStyle">
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
