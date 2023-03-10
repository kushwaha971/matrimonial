import { ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";

export const validationSchem = yup.object({
  firstName: yup.string().required("Please enter your First name"),
  lastName: yup.string().required("Please enter your Last name!"),
  gender: yup.string().required("Required!"),
  DOB: yup.string().required("Required!"),

});

function UserPersoanInfoValidation({ name }) {
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

export default UserPersoanInfoValidation;
