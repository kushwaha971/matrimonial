import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
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
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link } from "react-scroll";
import { userContext } from "../../context/Context";
// const pages = ["Home", "About us", "Success Stories", "Contact us", "Login"];
const IconStyle = {
  verticalAlign: "middle",
  margin: "0px 8px",
  marginTop: "4px",
};
const pages = [
  {
    id: 1,
    pageName: "Home",
    pageIcons: <HomeOutlinedIcon style={IconStyle} />,
    linkId: "home",
  },
  {
    id: 2,
    pageName: "About us",
    pageIcons: <InfoOutlinedIcon style={IconStyle} />,
    linkId: "about",
  },
  {
    id: 3,
    pageName: "Success Stories",
    pageIcons: <AutoStoriesOutlinedIcon style={IconStyle} />,
    linkId: "stories",
  },
  {
    id: 4,
    pageName: "Contact us",
    pageIcons: <ContactPageOutlinedIcon style={IconStyle} />,
    linkId: "",
  },
  {
    id: 5,
    pageName: "Login",
    pageIcons: <LoginOutlinedIcon style={IconStyle} />,
    linkId: "",
  },
];

const DrawerComp = (props) => {
  const [opendDrawer, setOpenDrawer] = React.useState(false);
  const contextData = React.useContext(userContext);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={opendDrawer}
        onClose={() => setOpenDrawer(false)}
        transitionDuration={500}
        PaperProps={{
          sx: { width: "100%",borderRadius: '10px' },
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
            <ListItem key={index}>
            <Link to={page.linkId} spy={true} smooth={true}>
              <ListItemButton
              key={page.id}
                sx={{
                  "&: hover": {
                    backgroundColor: "white",
                  },
                }}
                
                onClick={() => {
                  setOpenDrawer(!opendDrawer);
                  if (page.id === 5) {
                    props.handleLogin();
                  }
                  if(page.id===4){
                  contextData.handleContactDrawer()
                  }
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
            </Link>
            </ListItem>
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
