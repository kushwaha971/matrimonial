import {
  Box,
  Button,
  DialogContent,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import logo from "../../images/BirdLogo.png";
import LoginValidationSchema from "./LoginValidationSchema";

const MobileTextFieldStyle = styled(Box)(({ theme }) => ({
  ".logoStyle": {
    height: "100px",
    width: "150px",
    display: "block",
    marginTop: "-25px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ".titleStyle": {
    width: '90%',
    margin: "auto",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "20px",
    marginTop: "10px",
    color: "#424242",
    textAlign: "center",
  },
  ".subTitleStyle": {
    margin: "auto",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "21px",
    marginTop: "10px",
    color: "#212121",
    textAlign: "center",
  },
  ".OTPtextStyle": {
    margin: "auto",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "11px",
    color: "#f4511e",
    textAlign: "center",
  },
  ".signUpButtonStyle": {
    borderRadius: "80px",
    color: "#ffab91",
    fontSize: "17px",
    marginBottom: "5px",
    textTransform: "capitalize",
    "&: hover": { backgroundColor: "#9e9e9e" },
  },
  ".textFieldStyle": {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "20px",
    boxSizing: "border-box",
  },
  ".btnStyle": {
    width: "65%",
    display: "block",
    margin: "0px auto",
    border: "2px solid white",
    borderRadius: "30px",
    fontSize: "17px",
    color: "white",
    backgroundColor: "#bf360c",
    textTransform: "capitalize",
    "&: hover": { backgroundColor: "#9e9e9e", color: "#ffab91" },
  },
}));

function MobileTextField(props) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <MobileTextFieldStyle>
      <img src={logo} alt="Logo" className="logoStyle" />
      <Typography className="titleStyle">Welcome back! Please Login</Typography>
      <Typography variant="subtitle1" className="subTitleStyle">
        Enter Mobile Number
      </Typography>
      <Typography className="OTPtextStyle">
        We will send you an OTP to login
      </Typography>

      <DialogContent>
        <Formik initialValues={props.data} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <TextField
                name="mobile"
                type="text"
                variant="outlined"
                placeholder="Mobile No."
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+91</InputAdornment>
                  ),
                }}
                className="textFieldStyle"
              />
              <LoginValidationSchema name="mobile" />
              <Button variant="contained" type="submit" className="btnStyle">
                Send OTP
              </Button>
              {/* <TextField
                name="otp"
                type="text"
                variant="outlined"
                placeholder="Enter OTP"
                fullWidth
                className="textFieldStyle"
              />
              <LoginValidationSchema name="otp"/>
              <Button variant="contained" type="submit" className="btnStyle">
                Verify OTP
              </Button> */}
            </Form>
          )}
        </Formik>
      </DialogContent>
      <Typography
        style={{
          fontFamily: "Roboto",
          fontWeight: "500",
          color: "#263238",
          fontSize: "15px",
          margin: "8px",
        }}
      >
        New to Shaadi?
        <Button className="signUpButtonStyle" onClick={props.handleButton}>
          SignUp
        </Button>
      </Typography>
    </MobileTextFieldStyle>
  );
}

export default MobileTextField;
