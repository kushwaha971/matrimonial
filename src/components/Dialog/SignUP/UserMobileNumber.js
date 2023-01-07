import {
  Alert,
  Box,
  Button,
  DialogContent,
  TextField,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { UserSignUpStyled } from "./UserPersonalInfo";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import UserPhoneValidation, {
  validationSchem,
} from "./ValidationSchema/UserPhoneValidation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Swal from "sweetalert2";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { userContext } from "../../context/Context";

function setUpRecaptcha(mob) {
  const recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {},
    auth
  );
  recaptchaVerifier.render();
  return signInWithPhoneNumber(auth, mob, recaptchaVerifier);
}

let val;

function UserMobileNumber(props) {
  const contextData = React.useContext(userContext);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");

  const timer = React.useRef(0);
  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  });

  const handleLoader = () => {
    if (!loader) {
      setLoader(true);
      timer.current = window.setTimeout(() => {
        setLoader(false);
      }, 3000);
    }
  };

  const getOTP = async (values) => {
    const mob = "+91" + values.mobile;

    setError("");
    if (mob === "" || mob === undefined) {
      return setError("Please enter a valid Phone Number");
    }

    try {
      const response = await setUpRecaptcha(mob);
      setResult(response);
      setFlag(true);
      val = values;
    } catch (err) {
      setError("Something went wrong, Try again later");
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    handleLoader();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      props.next(val, true);
      contextData.handleSignUp();
      Swal.fire({
        position: "center",
        title: "you have registered successfully",
        icon: "success",
        timer: 3000,
        showClass: {
          popup: "animate__animated animate__fadeInUp",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown",
        },
      });
    } catch (err) {
      setError("Please enter Valid OTP");
    }
  };

  return (
    <UserSignUpStyled>
      <DialogContent>
        <Box sx={{ display: !flag ? "block" : "none" }}>
          <Formik
            validationSchema={validationSchem}
            initialValues={props.data}
            onSubmit={getOTP}
          >
            {(values) => (
              <Form>
                <Typography className="labelStyle">
                  <span style={{ color: "red" }}>*</span>Phone Number:
                </Typography>
                <br />
                <Field
                  name="mobile"
                  type="text"
                  label="Outlined"
                  variant="outlined"
                  placeholder="Your Phone Number"
                  fullWidth
                  className="textFieldStyle"
                />
                <UserPhoneValidation name="mobile" />
                <Box sx={{ width: "90%"  }}>
                  {error && <Alert sx={{ color: "red",margin: '5px',marginLeft: '-2px' }}>{error}</Alert>}
                  <div id="recaptcha-container"  className="captchaStyle" />
                </Box>
                <Button
                  variant="contained"
                  type="submit"
                  className="btnStyle"
                  sx={{ backgroundColor: "#f4511e", color: "#fafafa" }}
                >
                  Get OTP <SendToMobileIcon />
                </Button>
                <Box
                  sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    PaddinRight: "25px",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={props.previous}
                    className="backBtnStyle"
                  >
                    <ArrowBackIcon />
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>

        <Box sx={{ display: flag ? "block" : "none" }}>
          <Typography variant="subtitle1">Enter OTP and Submit</Typography>

          <form onSubmit={verifyOtp}>
            <br />
            <TextField
              name="otp"
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
              fullWidth
            />
            {error && <Alert sx={{ color: "red" }}>{error}</Alert>}
            {loader ? (
              <Button
                variant="contained"
                type="submit"
                className="btnStyle"
                sx={{ backgroundColor: "#f4511e", color: "#fafafa" }}
              >
                <CircularProgress />
              </Button>
            ) : (
              <Button
                variant="contained"
                type="submit"
                className="btnStyle"
                sx={{ backgroundColor: "#f4511e", color: "#fafafa" }}
              >
                Verify OTP & Submit <SendToMobileIcon />
              </Button>
            )}
          </form>
        </Box>
      </DialogContent>
    </UserSignUpStyled>
  );
}

export default UserMobileNumber;
