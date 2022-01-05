import React, { useState, useEffect } from "react";

const Context = React.createContext({});

export function CuentasContextProvider({ children }) {
  const [cuentas, setCuentas] = useState([]);

  return (
    <Context.Provider value={{ cuentas, setCuentas }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
