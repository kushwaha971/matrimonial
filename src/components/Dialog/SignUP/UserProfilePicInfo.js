import { Box, Button, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import PreviewFile from "./PreviewFile";
import { UserSignUpStyled } from "./UserPersonalInfo";
import UserProfileValidation, {
  validationSchem,
} from "./ValidationSchema/UserProfileValidation";

function UserProfilePicInfo(props) {
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
                <span style={{ color: "red" }}>*</span>Upload Profile Picture{" "}
                <br />
                <span style={{ fontSize: "10px" }}>
                  *(Supported Format: .jpg/.jpeg/.png; Max Size: 3MB)
                </span>
                :
              </Typography>
              <input
                style={{ marginTop: "40px" }}
                type="file"
                name="profilePicture"
                onChange={(event) => {
                  setFieldValue("profilePicture", event.target.files[0]);
                }}
              />

              <UserProfileValidation name="profilePicture" />
              <br />
              {values.profilePicture && (
                <PreviewFile file={values.profilePicture} />
              )}
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

export default UserProfilePicInfo;
