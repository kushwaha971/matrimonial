import { Box, Button, DialogContent, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import UserAddressValidation, {
  validationSchem,
} from "./ValidationSchema/UserAddressValidation";
import { UserSignUpStyled } from "./UserPersonalInfo";

function UserAddressForm(props) {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <UserSignUpStyled>
      <DialogContent sx={{ marginTop: "-40px" }}>
        <Formik
          validationSchema={validationSchem}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Typography className="labelStyle">
                <span style={{ color: "red" }}>*</span>Address:
              </Typography>
              <br />
              <Field
                name="address"
                type="text"
                label="Outlined"
                variant="outlined"
                placeholder="Enter Your Address"
                fullWidth
                className="textFieldStyle"
              />
              <UserAddressValidation name="address" />
              <Box
                sx={{
                  width: "95%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Typography className="labelStyle">
                    <span style={{ color: "red" }}>*</span>City:
                  </Typography>
                  <br />

                  <Field
                    name="city"
                    type="text"
                    label="Outlined"
                    variant="outlined"
                    placeholder="City"
                    className="textFieldStyle"
                  />
                  <UserAddressValidation name="city" />
                </div>
                <div>
                  <Typography className="labelStyle">
                    <span style={{ color: "red" }}>*</span>Zip Code:
                  </Typography>
                  <br />
                  <Field
                    name="zipCode"
                    type="text"
                    label="Outlined"
                    variant="outlined"
                    placeholder="Zip Code"
                    className="textFieldStyle"
                  />
                  <UserAddressValidation name="zipCode" />
                </div>
              </Box>

              <Typography className="labelStyle">
                <span style={{ color: "red" }}>*</span>State:
              </Typography>
              <br />
              <Field
                name="state"
                type="text"
                label="Outlined"
                variant="outlined"
                placeholder="State "
                fullWidth
                className="textFieldStyle"
              />
              <UserAddressValidation name="state" />
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
      </DialogContent>
    </UserSignUpStyled>
  );
}

export default UserAddressForm;
