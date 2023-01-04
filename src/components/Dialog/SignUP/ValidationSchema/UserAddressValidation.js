import { ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";

export const validationSchem = yup.object({
  address: yup.string().required("Required!"),
  zipCode: yup.string().required("Required!"),
  city: yup.string().required("Required!"),
  state: yup.string().required("Required!"),
});

function UserAddressValidation({ name }) {
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

export default UserAddressValidation;
