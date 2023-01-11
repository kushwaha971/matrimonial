import {
  Divider,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { userContext } from "../../context/Context";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";
import ContactForm from "./ContactForm";

function Contact() {
  const contextData = React.useContext(userContext);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Drawer
        anchor="bottom"
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        open={contextData.contactDrawer}
        onClose={contextData.handleContactDrawer}
        transitionDuration={1000}
        PaperProps={{
          sx: {
            idrection: "flex",
            margin: "auto",
            borderRadius: "8px",
            width: isMatch ? "100%" : "40%",
          },
        }}
      >
        <Box
          sx={{
            display: { xs: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              padding: "5px",
              paddingLeft: "25px",
              fontSize: "30px",
              fontWeight: 600,
              fontFamily: "Lobster, cursive",
              textAlign: "center",
            }}
          >
            Contact us
          </Typography>
          <IconButton
            style={{ color: "black", marginRight: "20px" }}
            onClick={contextData.handleContactDrawer}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <ContactForm handleDrawer = {contextData.handleContactDrawer} />
      </Drawer>
    </React.Fragment>
  );
}

export default Contact;
