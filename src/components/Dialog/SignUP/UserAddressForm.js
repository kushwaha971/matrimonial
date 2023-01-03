import { Box, Button, DialogContent } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import SignUpFormValidation, { validationSchem } from "./SignUpFormValidation";
import { UserSignUpStyled } from "./UserPersonDetails";

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
              <label className="labelStyle">Address: </label>
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
              <SignUpFormValidation name="address" />
              <Box
                sx={{
                  width: "95%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <label className="labelStyle">City: </label>
                  <br />

                  <Field
                    name="city"
                    type="text"
                    label="Outlined"
                    variant="outlined"
                    placeholder="City"
                    className="textFieldStyle"
                  />
                  <SignUpFormValidation name="city" />
                </div>
                <div>
                  <label className="labelStyle">Zip Code:</label>
                  <br />
                  <Field
                    name="zipCode"
                    type="text"
                    label="Outlined"
                    variant="outlined"
                    placeholder="Zip Code"
                    className="textFieldStyle"
                  />
                  <SignUpFormValidation name="zipCode" />
                </div>
              </Box>

              <label className="labelStyle">State: </label>
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
              <SignUpFormValidation name="state" />
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
