import React from "react";

export const userContext = React.createContext();

function Context({ children }) {
  const [openLoginPage, setOpenLoginPage] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [contactDrawer,setContactDrawer] = React.useState(false);

  const data = {
    openLoginPage: openLoginPage,
    openSignUp: openSignUp,
    contactDrawer:contactDrawer,
    setOpenLoginPage: setOpenLoginPage,
    handleCloseLogin: () => {
      setOpenLoginPage(!openLoginPage);
    },
    handleSignUp: () => {
      setOpenSignUp(!openSignUp);
    },
    handleContactDrawer: () => {
      setContactDrawer(!contactDrawer);
    }
    
  };
  return <userContext.Provider value={data}>{children}</userContext.Provider>;
}

export default Context;
