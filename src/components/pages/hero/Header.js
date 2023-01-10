import {
  AppBar,
  Box,
  IconButton,
  styled,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Login from "../../Dialog/Login/Login";
import SignUp from "../../Dialog/SignUP/SignUp";
import logo from "../../images/BirdLogo.png";
import { userContext } from "../../context/Context";
import DrawerComp from "./DrawerComp";
import { Link } from "react-scroll";

export const HeaderStyle = styled(Box)(({ theme }) => ({
  ".logintabStyle": {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: "17px",
    marginRight: "55px",
    textDecoration: "none",

    "&:hover": {
      color: "#9e9e9e",
      textDecoration: "underline",
    },
  },
  ".tabStyle": {
    color: "#FFFFFF",
    fontFamily: "Roboto",
    textTransform: "capitalize",
    fontWeight: "400",
    fontSize: "20px",
    marginRight: "55px",
    textDecoration: "none",

    "&:hover": {
      fontSize: "20px",
      fontWeight: "600",
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
  const [value, setValue] = React.useState("home");
  // const tabIndxHandle =(e,newValue) => {
  //     setValue(newValue);
  // }
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HeaderStyle>
      {contextData.openLoginPage && <Login />}
      {contextData.openSignUp && <SignUp />}

      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#bf360c", opacity: 1 }}
        >
          <Toolbar>
            <IconButton size="large" edge="start">
              <img
                src={logo}
                alt="BTU Shaadi.com"
                style={{ height: "50px", width: "100px" }}
              />
            </IconButton>
            {isMatch ? (
              <>
                <DrawerComp handleLogin={contextData.handleCloseLogin} />
              </>
            ) : (
              <>
                <Tabs
                  value={value}
                  onChange={(e, val) => setValue(val)}
                  TabIndicatorProps={{ style: { background: "none" } }}
                  style={{
                    marginLeft: "auto",
                  }}
                >
                  <Tab
                    value="home"
                    label={
                      <Link to="home" spy={true} smooth={true}>
                        <div style={{ color: "white" }}>Home</div>{" "}
                      </Link>
                    }
                    className="tabStyle"
                  />

                  <Tab
                    value="about"
                    label={
                      <Link to="about" spy={true} smooth={true}>
                        <div style={{ color: "white" }}>About us</div>
                      </Link>
                    }
                    className="tabStyle"
                  />

                  <Tab
                    value="success stories"
                    label={
                      <Link to="stories" spy={true} smooth={true}>
                        <div style={{ color: "white" }}>Success Stories</div>
                      </Link>
                    }
                    className="tabStyle"
                  />

                  <Tab
                    value="contact"
                    label={
                      <Link spy={true} smooth={true}>
                        <div style={{ color: "white" }}>Contact us</div>{" "}
                      </Link>
                    }
                    className="tabStyle"
                  />

                  <Tab
                    value="login"
                    label={
                      <div style={{ color: "white" }}>
                        Login{" "}
                        <KeyboardArrowDownIcon
                          style={{
                            verticalAlign: "middle",
                            marginLeft: "-8px",
                          }}
                        />
                      </div>
                    }
                    className="logintabStyle"
                    onClick={contextData.handleCloseLogin}
                  />
                </Tabs>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </HeaderStyle>
  );
}

export default Header;
