import { Button, DialogContent, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { UserSignUpStyled } from "./UserPersonalInfo";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import UserPhoneValidation,{validationSchem} from "./ValidationSchema/UserPhoneValidation";

function UserMobileNumber(props) {
  const handleSubmit = (values) => {
    props.next(values);
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
                name="mobile"
                type="text"
                label="Outlined"
                variant="outlined"
                placeholder="Enter OTP"
                fullWidth
                className="textFieldStyle"
              />

              <Button
                variant="contained"
                type="submit"
                className="btnStyle"
                sx={{ backgroundColor: "#f4511e", color: "#fafafa" }}
              >
                Verify OTP & Continue
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </UserSignUpStyled>
  );
}

export default UserMobileNumber;
