import { Box, Dialog, DialogTitle, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { userContext } from "../../context/Context";
import MobileTextField from "./MobileTextField";

function Login() {
  const contextData = React.useContext(userContext);
  const [lognInfo, setLoginInfo] = React.useState({
    mobile: "",
    otp: "",
  });

  const [currentStep, setCurrentStep] = React.useState(0);

  const handleNextStep = (newData) => {
    setLoginInfo((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev + 1);
  };

  // const handePrevStep = (newData) => {
  //   setLoginInfo((prev) => ({ ...prev, ...newData }));
  //   setCurrentStep((prev) => prev - 1);
  // };

  const handleButton = () => {
    contextData.handleSignUp();
    contextData.handleCloseLogin();
  };

  const Steps = [
    <MobileTextField
      handleButton={handleButton}
      data={lognInfo}
      handleNextStep={handleNextStep}
    />,
  ];
  return (
    <React.Fragment>
      <Dialog
        open={contextData.openLoginPage}
        onClose={contextData.handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "400px",
              background: "#d7ccc8",
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
            <IconButton onClick={contextData.handleCloseLogin}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          {Steps[currentStep]}
        </Box>
      </Dialog>
    </React.Fragment>
  );
}

export default Login;
