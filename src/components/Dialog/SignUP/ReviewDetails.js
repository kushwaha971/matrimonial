import { Button, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";

function ReviewDetails(props) {
  const handleSubmit = (values) => {
    console.log("Red", props.data);
    props.submit(values, true);
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={props.data}>
      {() => (
        <Form>
          <Typography>First Name: {props.data.firstName}</Typography>
          <Typography>Last Name: {props.data.lastName}</Typography>
          <Typography>Gender: {props.data.gender}</Typography>
          <Typography>DOB: {props.data.DOB}</Typography>
          <Typography>Address: {props.data.address}</Typography>
          <Typography>Postal Code: {props.data.zipCode}</Typography>
          <Typography>City: {props.data.city}</Typography>
          <Typography>College: {props.data.college}</Typography>
          <Typography>ID Card: {props.data.idCard}</Typography>
          <Typography>Profile : {props.data.profilePicture}</Typography>
          <Typography>Mobile No.: {props.data.mobile}</Typography>

          <Button type="submit">Click</Button>
        </Form>
      )}
    </Formik>
  );
}

export default ReviewDetails;
