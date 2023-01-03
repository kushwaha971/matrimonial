import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";


const LoginStyle = styled(Box)(({ theme }) => ({
  // margin: '20px'
}));

function Login(props) {

 

  // const handleOpenSignUpPage = () => {
  //   setOpenSignUp(true);
  //   // handleClose();
  //   // props.setOpenLoginPage(false);
  // };
  const handleButton = () =>{
    props.handleSignUp();
    props.handleClose();
  }

  return (
    <LoginStyle>
      <Dialog open={props.openLoginPage} onClose={props.handleClose}>
        <Box sx={{ margin: "20px" }}>
          <IconButton sx={{ right: 0 }} onClick={props.handleClose}>
            <CloseIcon />
          </IconButton>
          <DialogTitle>Welcome back! Please Login</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter Mobile Number"
              type="email"
              fullWidth
              variant="outlined"
            />
            <Button variant="contained" sx={{ width: "100%" }}>
              Get OTP
            </Button>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email OTP"
              type="email"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={props.handleClose}
              sx={{ width: "100%" }}
            >
              Login
            </Button>
          </DialogActions>
          <Typography>
            New to Shaadi?{" "}
            <Button onClick={handleButton}>Sign Up</Button>
          </Typography>
        </Box>
      </Dialog>
    
    </LoginStyle>
  );
}

export default Login;
