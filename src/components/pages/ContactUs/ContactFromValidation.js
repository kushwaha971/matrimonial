import { ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";

export const validationSchem = yup.object({
  name: yup.string().required("Please enter your name"),
  phone: yup
    .string()
    .required("Please enter your phone number")
    .min(10, "Please enter valid mobile number")
    .max(10, "Please enter valid mobile number"),
});

function ContactFromValidation({ name }) {
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

export default ContactFromValidation;
