import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { UserSignUpStyled } from "../SignUP/UserPersonalInfo";
import { userContext } from "../../context/Context";

function Login() {
  const contextData = React.useContext(userContext);

  const handleButton = () => {
    contextData.handleSignUp();
    contextData.handleClose();
  };

  return (
    <UserSignUpStyled>
      <Dialog
        open={contextData.openLoginPage}
        onClose={contextData.handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "400px",
            },
          },
        }}
      >
        <Box
          sx={{
            padding: "0px ",
            marginLeft: "5px",
          }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "right",
              marginLeft: "-25px",
            }}
          >
            {" "}
            <Typography className="dialogTitleStyle">
              Welcome back! Please Login
            </Typography>
            <IconButton onClick={contextData.handleCloseLogin}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>

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
              onClick={contextData.handleCloseLogin}
              sx={{ width: "100%" }}
            >
              Login
            </Button>
          </DialogActions>
          <Typography>
            New to Shaadi? <Button onClick={handleButton}>Sign Up</Button>
          </Typography>
        </Box>
      </Dialog>
    </UserSignUpStyled>
  );
}

export default Login;
