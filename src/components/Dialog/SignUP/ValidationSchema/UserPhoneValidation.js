import { ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";

export const validationSchem = yup.object({
  mobile: yup
    .string()
    .required("Phone number is Required!")
    .min(10, "Please enter valid mobile number")
    .max(10, "Please enter valid mobile number"),
});

function UserPhoneValidation({ name }) {
  return (
    <div
      style={{
        color: "red",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontWeight: "500",
        marginLeft: "2px",
      }}
    >
      <ErrorMessage name={name} />
    </div>
  );
}

export default UserPhoneValidation;
