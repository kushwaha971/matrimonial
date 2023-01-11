import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import ContactFromValidation, {
  validationSchem,
} from "./ContactFromValidation";

const ContactFormStyle = styled(Box)(({ theme }) => ({
  padding: "25px",
  ".textFieldStyle": {
    width: "90%",
    padding: "12px 20px",
    margin: "5px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "20px",
    boxSizing: "border-box",
  },
  ".labelStyle": {
    fontFamily: "Poppins",
    fontWeight: "400",
    color: "#212121",
    fontSize: "15px",
    marginLeft: "5px",
  },
  ".sendBtnStyle": {
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    color: "#ffffff",
    fontFamily: "Poppins",
    textTransform: "capitalize",
    fontSize: "15px",
    backgroundColor: "#689f38",
    "&: hover": { backgroundColor: "#9e9e9e", color: "white" },
  },
}));

function ContactForm(props) {
  return (
    <ContactFormStyle> 
      <Formik
        initialValues={{ name: "", phone: "", subject: "", message: "" }}
        validationSchema={validationSchem}
        onSubmit={(values) => {
          console.log(values);
          props.handleDrawer();
        }}
      >
        {() => (
          <Form>
            <Typography className="labelStyle">
              {" "}
              <span style={{ color: "red" }}>*</span>Name:
            </Typography>
            <Field
              name="name"
              type="text"
              label="Outlined"
              placeholder="Enter Your Name"
              className="textFieldStyle"
            />
            <ContactFromValidation name="name" />
            <br />
            <Typography className="labelStyle">
              {" "}
              <span style={{ color: "red" }}>*</span>Phone:
            </Typography>
            <Field
              name="phone"
              type="text"
              label="Outlined"
              placeholder="Enter Your Phone"
              className="textFieldStyle"
            />
            <ContactFromValidation name="phone" />
            <br />
            <Typography className="labelStyle"> Subject:</Typography>
            <Field
              name="subject"
              type="text"
              label="Outlined"
              placeholder="Subject"
              className="textFieldStyle"
            />
            <br />
            <Typography className="labelStyle"> Your Message:</Typography>
            <Field
              name="message"
              as="textarea"
              label="Outlined"
              className="textFieldStyle"
            />
            <br />
            <Button variant="contained" className="sendBtnStyle" type="submit">
              Send{" "}
              <SendIcon
                sx={{
                  verticalAlign: "middle",
                  fontSize: "20px",
                  margin: "2px",
                }}
              />
            </Button>
          </Form>
        )}
      </Formik>
    </ContactFormStyle>
  );
}

export default ContactForm;
