import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export function useApp() {
  return useContext(AppContext);
}

const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(null);
  const [user, setUser] = useState();
  const [activeConversation, setActiveConversation] = useState();

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleUser = (value) => {
    console.log("entre value", value);
    setUser(value);
  };
  const handleActiveConversation = (value) => {
    setActiveConversation(value);
  };

  const value = {
    open,
    handleOpen,
    user,
    handleUser,
    activeConversation,
    handleActiveConversation,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
