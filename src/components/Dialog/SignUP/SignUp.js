import { Box, Dialog, DialogTitle, IconButton } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import UserAddressForm from "./UserAddressForm";
import UserPersonalInfo from "./UserPersonalInfo";
import UserEducationInfo from "./UserEducationInfo";
import UserProfilePicInfo from "./UserProfilePicInfo";
import UserMobileNumber from "./UserMobileNumber";
import { userContext } from "../../context/Context";

function SignUp() {
  const contextData = React.useContext(userContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    DOB: "",
    address: "",
    zipCode: "",
    city: "",
    state: "",
    college: "",
    idCard: null,
    profilePicture: null,
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
    contextData.handleSignUp();
    contextData.handleLogin();
  };

  const Steps = [
    <UserPersonalInfo
      next={handleNextStep}
      data={data}
      handleButton={handleButton}
    />,
    <UserAddressForm
      next={handleNextStep}
      previous={handePrevStep}
      data={data}
    />,
    <UserEducationInfo
      next={handleNextStep}
      previous={handePrevStep}
      data={data}
    />,
    <UserProfilePicInfo
      next={handleNextStep}
      previous={handePrevStep}
      data={data}
    />,
    <UserMobileNumber
      next={handleNextStep}
      previous={handePrevStep}
      data={data}
    />,
  ];

  return (
    <Dialog
      open={contextData.openSignUp}
      onClose={contextData.handleOpenSignUpPage}
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
          <IconButton onClick={contextData.handleSignUp}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        {Steps[currentStep]}
      </Box>
    </Dialog>
  );
}

export default SignUp;
