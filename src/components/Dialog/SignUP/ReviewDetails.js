import { Button, Typography } from "@mui/material";
// import { Form, Formik } from "formik";
import React from "react";
import { userContext } from "../../context/Context";

function ReviewDetails(props) {
  const contextData = React.useContext(userContext);
  const handleSubmit = (values) => {
    console.log("Red", props.data);
    props.submit(values, true);
    contextData.handleSignUp();
    alert("You registered successfully!");
  };
  return (
    <>
      {/* <Typography>First Name: {props.data.firstName}</Typography>
      <Typography>Last Name: {props.data.lastName}</Typography>
      <Typography>Gender: {props.data.gender}</Typography>
      <Typography>DOB: {props.data.DOB}</Typography>
      <Typography>Address: {props.data.address}</Typography>
      <Typography>Postal Code: {props.data.zipCode}</Typography>
      <Typography>City: {props.data.city}</Typography>
      <Typography>College: {props.data.college}</Typography>
      <Typography>ID Card: {props.data.idCard}</Typography>
      <Typography>Profile : {props.data.profilePicture}</Typography>
      <Typography>Mobile No.: {props.data.mobile}</Typography> */}

      <Button onClick={handleSubmit}>Click</Button>
    </>
  );
}

export default ReviewDetails;
