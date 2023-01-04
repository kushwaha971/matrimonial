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
import UserPersonalInfoValidation, {
  validationSchem,
} from "./ValidationSchema/UserPersoanInfoValidation";
import MyDatePicker from "./MyDatePicker";

export const UserSignUpStyled = styled(Box)(({ theme }) => ({
  ".dialogTitleStyle": {
    margin: "auto",
    fontFamily: "Roboto Condensed",
    fontWeight: "500",
    fontSize: "20px",
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
    marginBottom: "20px",
    boxSizing: "border-box",
  },
  ".labelStyle": {
    fontFamily: "Roboto Condensed",
    fontWeight: "500",
    color: "#212121",
    fontSize: "15px",
    marginLeft: "5px",
    marginBottom: "-25px",
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
  ".backBtnStyle": {
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "20px",
    color: "#ffffff",
    fontFamily: "Roboto Condensed",
    fontSize: "17px",
    backgroundColor: "#3d5afe",
    textTransform: "capitalize",
    "&: hover": { backgroundColor: "#9e9e9e", color: "white" },
  },
  ".nextBtnStyle": {
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "20px",
    color: "#ffffff",
    fontFamily: "Roboto Condensed",
    textTransform: "capitalize",
    fontSize: "17px",
    backgroundColor: "#689f38",
    
    "&: hover": { backgroundColor: "#9e9e9e", color: "white" },
  },
}));

function UserPersonalInfo(props) {
  const handleSubmit = (values) => {
    props.next(values);
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
          {(values) => (
            <Form>
              <Typography className="labelStyle">
                <span style={{ color: "red" }}>*</span>First Name:
              </Typography>
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
              <UserPersonalInfoValidation name="firstName" />
              <Typography className="labelStyle">
                <span style={{ color: "red" }}>*</span>Last Name:
              </Typography>
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
              <UserPersonalInfoValidation name="lastName" />

              <Typography className="labelStyle">
                <span style={{ color: "red" }}>*</span>Gender:
              </Typography>
              <br />

              <label className="labelStyle">
                <Field
                  name="gender"
                  type="radio"
                  value="Male"
                  style={{ marginBottom: "20px" }}
                />
                Male
              </label>

              <label className="labelStyle">
                <Field name="gender" type="radio" value="Female" />
                Female
              </label>
              <UserPersonalInfoValidation name="gender" />

              <label className="labelStyle">
                <span style={{ color: "red" }}>*</span>Date of Birth
              </label>
              <MyDatePicker name="DOB" />
              <UserPersonalInfoValidation name="DOB" />

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

export default UserPersonalInfo;
