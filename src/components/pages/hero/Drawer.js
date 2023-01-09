import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "About us", "Success Stories", "Contact us", "Login"];

const Drawer = () => {
  const [opendDrawer, setOpenDrawer] = React.useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={opendDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
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

export default Drawer;
