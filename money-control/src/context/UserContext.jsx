import React, { useState, useEffect } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [profile, setProfile] = useState({});
  const [authFB, setAuthFB] = useState({});
  const [offlineMode, setOfflineMode] = useState(true);
  const [admin, setAdmin] = useState(localStorage.getItem("admin"));

  return (
    <Context.Provider value={{ profile, setProfile, admin, setAdmin, offlineMode, setOfflineMode, authFB, setAuthFB }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
