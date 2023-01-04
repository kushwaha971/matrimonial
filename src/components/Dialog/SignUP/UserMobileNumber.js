import { Box, Button, DialogContent, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { UserSignUpStyled } from "./UserPersonalInfo";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import UserPhoneValidation, {
  validationSchem,
} from "./ValidationSchema/UserPhoneValidation";
import { userContext } from "../../context/Context";

function UserMobileNumber(props) {

  const contextData = React.useContext(userContext);
  
  const handleSubmit = (values) => {
    props.next(values,true);
    contextData.handleSignUp();
    alert("You registered successfully!");
  };
  return (
    <UserSignUpStyled>
      <DialogContent>
        <Formik
          validationSchema={validationSchem}
          initialValues={props.data}
          onSubmit={handleSubmit}
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
              <Button
                disabled
                variant="contained"
                type="submit"
                className="btnStyle"
                sx={{ backgroundColor: "#f4511e", color: "#fafafa" }}
              >
                Get OTP <SendToMobileIcon />
              </Button>
              <br />
              <Field
                disabled
                name="mobile"
                type="text"
                label="Outlined"
                variant="outlined"
                placeholder="Enter OTP"
                fullWidth
                className="textFieldStyle"
              />

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
                  Back
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  className="nextBtnStyle"
                >
                  Verify & Continue
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </UserSignUpStyled>
  );
}

export default UserMobileNumber;
