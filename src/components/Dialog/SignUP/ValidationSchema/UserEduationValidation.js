import { ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";

export const validationSchem = yup.object({
  college: yup.string().required("Required!"),
  idCard: yup
    .mixed()
    .nullable()
    .required("Required!")
    .test(
      "FILE_SIZE",
      "Size should be less than 3MB. ",
      (value) => value && value.size < 1024 * 1024 * 3
    )
    .test(
      "FILE_FORMAT",
      "Image formate should be .png or .jpeg or .jpg.",
      (value) =>  (value &&  ["image/png", "image/jpeg", "image/jpg"].includes(value.type)) 
     )
 
});

function UserEduationValidation({name}) {
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

export default UserEduationValidation;
