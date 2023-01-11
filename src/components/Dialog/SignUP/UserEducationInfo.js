import { Box, Button, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import PreviewFile from "./PreviewFile";
import { UserSignUpStyled } from "./UserPersonalInfo";
import UserEduationValidation, {
  validationSchem,
} from "./ValidationSchema/UserEduationValidation";

function UserEducationInfo(props) {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <UserSignUpStyled>
      <Box
        sx={{
          marginLeft: "20px",
          padding: "10px 5px",
          marginTop: "-40px",
        }}
      >
        <Formik
          validationSchema={validationSchem}
          initialValues={props.data}
          onSubmit={handleSubmit}
          setFieldValue
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Typography className="labelStyle">
                <span style={{ color: "red" }}>*</span>College/University Name:
                <br />
                <span style={{ fontSize: "10px" }}>
                  *(Supported Format: .jpg/.jpeg/.png; Max Size: 3MB)
                </span>
                :
              </Typography>
              <br />
              <Field
                name="college"
                type="text"
                label="Outlined"
                variant="outlined"
                placeholder="Enter College/University Name"
                fullWidth
                className="textFieldStyle"
              />
              <UserEduationValidation name="college" />
              <br />
              <Typography className="labelStyle">
                <span style={{ color: "red" }}>*</span>Upload ID Card for
                College Verification:
              </Typography>
              <br />
              <input
                style={{ marginTop: "10px" }}
                type="file"
                name="idCard"
                onChange={(event) => {
                  setFieldValue("idCard", event.target.files[0]);
                }}
              />

              <UserEduationValidation name="idCard" />
              <br />
              {values.idCard && <PreviewFile file={values.idCard} />}
              <br />

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
                  Continue
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </UserSignUpStyled>
  );
}

export default UserEducationInfo;
