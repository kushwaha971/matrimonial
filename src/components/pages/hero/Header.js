import {
  AppBar,
  Box,
  IconButton,
  styled,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Login from "../../Dialog/Login/Login";
import SignUp from "../../Dialog/SignUP/SignUp";
import logo from "../../images/BirdLogo.png";
import { userContext } from "../../context/Context";

const HeaderStyle = styled(Box)(({ theme }) => ({
  ".tabStyle": {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: "18px",
    marginRight: "55px",
    "&:hover": {
      textDecoration: "underline",
      color: "#ffab91",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "0px",
    },
  },
  ".iconButtonStyle": {
    marginLeft: "30px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0px",
    },
  },
}));

function Header() {
  const contextData = React.useContext(userContext);

  return (
    <HeaderStyle>
      {contextData.openLoginPage && <Login />}
      {contextData.openSignUp && <SignUp />}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#bf360c", opacity: 1 }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              className="iconButtonStyle"
            >
              <img
                src={logo}
                alt="BTU Shaadi.com"
                style={{ height: "50px", width: "100px" }}
              />
            </IconButton>
            <Tabs
              value="1"
              style={{
                marginLeft: "auto",
              }}
            >
              <Tab
                value="1"
                label={
                  <div>
                    Login{" "}
                    <KeyboardArrowDownIcon
                      style={{ verticalAlign: "middle", marginLeft: "-8px" }}
                    />
                  </div>
                }
                index="0"
                className="tabStyle"
                onClick={contextData.setOpenLoginPage}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </Box>
    </HeaderStyle>
  );
}

export default Header;
