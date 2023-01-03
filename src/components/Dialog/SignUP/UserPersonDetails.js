import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  styled,
  Typography,
} from "@mui/material";
import SignUpFormValidation, { validationSchem } from "./SignUpFormValidation";
import MyDatePicker from "./MyDatePicker";

export const UserSignUpStyled = styled(Box)(({ theme }) => ({
  ".dialogTitleStyle": {
    margin: "auto",
    fontFamily: "Roboto Condensed",
    fontWeight: "400",
    fontSize: "15px",
    marginTop: "-45px",
    color: "#424242",
    width: "70%",
    textAlign: "center",
  },
  ".textFieldStyle": {
    width: "90%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  ".labelStyle": {
    fontFamily: "Roboto Condensed",
    fontWeight: "500",
    color: "#757575",
    fontSize: "15px",
    margin: "5px",
    lineHeight: "25px",
  },
  ".btnStyle": {
    width: "90%",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "80px",
    color: "#ffab91",
    fontSize: "17px",
    textTransform: "capitalize",
    "&: hover": { backgroundColor: "#9e9e9e", color: "white" },
  },
  ".loginButtonStyle": {
    borderRadius: "80px",
    color: "#ffab91",
    fontSize: "17px",
    textTransform: "capitalize",
    "&: hover": { backgroundColor: "#9e9e9e" },
  },
  ".backBtnStyle":{
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "20px",
    color: "#ffffff",
    fontFamily: 'Roboto Condensed',
    fontSize: "17px",
    backgroundColor: '#3d5afe',
    textTransform: "capitalize",
    "&: hover": { backgroundColor: "#9e9e9e", color: "white" },
  },
  ".nextBtnStyle":{
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "20px",
    color: "#ffffff",
    fontFamily: 'Roboto Condensed',
    fontSize: "17px",
    backgroundColor: '#689f38',
    textTransform: "capitalize",
    "&: hover": { backgroundColor: "#9e9e9e", color: "white" },
  },
}));

function UserPersonDetails(props) {
  const handleSubmit = (values) => {
    props.next(values);
    // console.log("Akash");
  };

  return (
    <UserSignUpStyled>
      <DialogTitle className="dialogTitleStyle">
        {" "}
        Let's set up your account, while we find Matches for you!
      </DialogTitle>
      <DialogContent>
        <Formik
          validationSchema={validationSchem}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <label className="labelStyle">First Name:</label>
              <br />
              <Field
                name="firstName"
                type="text"
                label="Outlined"
                variant="outlined"
                placeholder="Enter your First Name"
                fullWidth
                className="textFieldStyle"
              />
              <SignUpFormValidation name="firstName" />
              <label className="labelStyle">Last Name:</label>
              <br />
              <Field
                name="lastName"
                type="text"
                label="Outlined"
                variant="outlined"
                placeholder="Enter your Last Name"
                fullWidth
                className="textFieldStyle"
              />
              <SignUpFormValidation name="lastName" />

              <label className="labelStyle">Gender</label>
              <br />

              <label className="labelStyle">
                <Field name="gender" type="radio" value="Male" />
                Male
              </label>

              <label className="labelStyle">
                <Field name="gender" type="radio" value="Female" />
                Female
              </label>
              <SignUpFormValidation name="gender" />

              <label className="labelStyle">Date of Birth</label>
              <MyDatePicker name="DOB" />
              <SignUpFormValidation name="DOB" />

              <Button variant="contained" type="submit" className="btnStyle">
                Save & Continue
              </Button>
            </Form>
          )}
        </Formik>
        <Typography
          style={{
            fontFamily: "Roboto Condensed",
            fontWeight: "500",
            color: "#424242",
            fontSize: "15px",
            margin: "5px",
          }}
        >
          Already Memeber?
          <Button className="loginButtonStyle" onClick={props.handleButton}>
            Login
          </Button>
        </Typography>
      </DialogContent>
    </UserSignUpStyled>
  );
}

export default UserPersonDetails;
