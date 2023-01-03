import {
  AppBar,
  Box,
  IconButton,
  styled,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";

import Login from "../../Dialog/Login/Login";
import SignUp from "../../Dialog/SignUP/SignUp";
import logo from "../../images/BirdLogo.png";

const HeaderStyle = styled(Box)(({ theme }) => ({
  ".tab-Style": {
    color: "#FFFFFF",
    fontFamily: "Montserrat Alternates",
    fontWeight: "400",
    fontSize: "15px",
    marginRight: "5px",
  },
}));

function Header() {
  
  const [openLoginPage, setOpenLoginPage] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleCloseLogin = () => {
   setOpenLoginPage(!openLoginPage);
  };

  const handleSignUp = () =>{
    setOpenSignUp(!openSignUp)
  }

  return (
    <HeaderStyle>
   
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#ff5252" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img
                src={logo}
                alt="BTU Shaadi.com"
                style={{ height: "50px", width: "100px" }}
              />
            </IconButton>
            <Tabs sx={{ marginLeft: "auto" }}>
              <Tab
                label="Login"
                // value='0'
                index="0"
                className="tab-Style"
                onClick={setOpenLoginPage}
              />
              <Tab
                label="SignUp"
                className="tab-Style"
                onClick={setOpenSignUp}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </Box>
      {openLoginPage && (
        <Login
          openLoginPage={openLoginPage}
          handleClose={handleCloseLogin}
          handleSignUp = {handleSignUp}
        />
      )}

      { openSignUp && (
        <SignUp
          openSignUp={openSignUp}
          handleSignUp = {handleSignUp}
          handleLogin = {handleCloseLogin}

        />
      )}
    
    </HeaderStyle>
  );
}

export default Header;
