import React, { useState } from "react";

const SignPopupActions = {
  HIDE_POPUP: "hideSignupPopup",
  SHOW_POPUP: "showSignupPopup",
};

const LoginPopupActions = {
  HIDE_POPUP: "hideLoginPopup",
  SHOW_POPUP: "showLoginPopup",
};

const intialsState = {
  showSignPopupValue: false,
  showLoginPopupValue: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    // Login Popup
    case LoginPopupActions.HIDE_POPUP: {
        return {showLoginPopupValue: false}
    }

    case LoginPopupActions.SHOW_POPUP: {
   
        return  {showLoginPopupValue: true,}
    }

    // SignUp Popup

    case SignPopupActions.HIDE_POPUP: {
        return {showSignPopupValue: false,}
      
    }

    case SignPopupActions.SHOW_POPUP: {
        return {showSignPopupValue: true,}
    }

    default:
      return state;
  }
};

export const Context = React.createContext();

function LoginSignUpContext({ children }) {
  const [state, dispatch] = React.useReducer(reducer, intialsState);

  const value = {
    showSignPopupValue: state.showSignPopupValue,
    showLoginPopupValue: state.showLoginPopupValue,

    hideSignupPopup: () =>{
        const obj = {
            showSignPopupValue: false,
        };
        dispatch({type: SignPopupActions.HIDE_POPUP,obj});
    },

    showSignupPopup: () =>{
        const obj = {
            showSignPopupValue: true,
        }
        dispatch({type: SignPopupActions.SHOW_POPUP,obj});
    },

    hideLoginPopup: () =>{
        const obj = {
            showLoginPopupValue: false,
        };
        dispatch({type: LoginPopupActions.HIDE_POPUP,obj});
    },

    showSignupPopup: () =>{
        const obj = {
            showLoginPopupValue: true,
        }
        dispatch({type: LoginPopupActions.SHOW_POPUP,obj});
    },


  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default LoginSignUpContext;
