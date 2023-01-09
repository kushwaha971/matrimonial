import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../images/BirdLogo.png";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
// const pages = ["Home", "About us", "Success Stories", "Contact us", "Login"];
const IconStyle = {
  verticalAlign: "middle",
  margin: "0px 8px",
  marginTop: '4px'
};
const pages = [
  {
    id: 1,
    pageName: "Home",
    pageIcons: <HomeOutlinedIcon style={IconStyle} />,
  },
  {
    id: 2,
    pageName: "About us",
    pageIcons: <InfoOutlinedIcon style={IconStyle} />,
  },
  {
    id: 3,
    pageName: "Success Stories",
    pageIcons: <AutoStoriesOutlinedIcon style={IconStyle} />,
  },
  {
    id: 4,
    pageName: "Contact us",
    pageIcons: <ContactPageOutlinedIcon style={IconStyle} />,
  },
];

const DrawerComp = () => {
  const [opendDrawer, setOpenDrawer] = React.useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={opendDrawer}
        onClose={() => setOpenDrawer(false)}
        transitionDuration={500}
        PaperProps={{
          borderRadius: "20px 20px 0 0",
          sx: { width: "100%" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#bf360c",
            display: { xs: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton size="large" edge="start">
            <img
              src={logo}
              alt="BTU Shaadi.com"
              style={{ height: "50px", width: "100px", marginLeft: "25px" }}
            />
          </IconButton>
          <IconButton
            style={{ color: "white", marginRight: "20px" }}
            onClick={() => {
              setOpenDrawer(!opendDrawer);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {pages.map((page, index) => (
            <ListItemButton
              sx={{
                "&: hover": {
                  backgroundColor: "white",
                },
              }}
              key={index}
              onClick={() => {
                setOpenDrawer(!opendDrawer);
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#dd2c00",
                  margin: "10px 0px",
                  padding: "5px 20px ",
                  paddingRight: "30px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "5px",
                }}
              >
                {" "}
                {page.pageIcons}
                <ListItemText
                  sx={{
                    color: "#424242",
                    fontFamily: "Poppins",
                    textTransform: "capitalize",
                    fontWeight: "600",
                    fontSize: "30px",
                  }}
                >
                  {page.pageName}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => {
          setOpenDrawer(!opendDrawer);
        }}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
