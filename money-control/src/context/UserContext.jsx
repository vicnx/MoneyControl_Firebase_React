import React, { useState } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [admin, setAdmin] = useState(localStorage.getItem("admin"));

  return (
    <Context.Provider value={{ profile, setProfile, admin, setAdmin }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
