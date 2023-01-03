import { Box, Dialog, DialogTitle, IconButton } from "@mui/material";
import React, { useState } from "react";
import UserPersonDetails from "./UserPersonDetails";
import CloseIcon from "@mui/icons-material/Close";
import UserAddressForm from "./UserAddressForm";

function SignUp(Props) {
  const [data, setData] = useState({
    step: 0,
    firstName: "",
    lastName: "",
    gender: "",
    DOB: "",
    address: "",
    zipCode: "",
    city: "",
    state: "",
    collegeName: "",
    qualification: "",
    profilePicture: "",
    mobile: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
 

  const handleNextStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  console.log("Data", data);
  const handleButton = () => {
    Props.handleSignUp();
    Props.handleLogin();
  };

  const Steps = [
    <UserPersonDetails
      next={handleNextStep}
      data={data}
      handleButton={handleButton}
    />,
    <UserAddressForm
      next={handleNextStep}
      previous={handePrevStep}
      data={data}
    />,
  ];

  return (
    <Dialog
      open={Props.openSignUp}
      onClose={Props.handleOpenSignUpPage}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "400px", 
          },
        },
      }}
    >
      <Box
        sx={{
          padding: "0px ",
          marginLeft: "5px",
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "right",
            marginLeft: "-25px",
          }}
        >
          <IconButton onClick={Props.handleSignUp}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        {Steps[currentStep]}
      </Box>
    </Dialog>
  );
}

export default SignUp;
