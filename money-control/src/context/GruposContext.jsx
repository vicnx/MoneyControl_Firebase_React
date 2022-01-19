import React, { useState } from "react";

const Context = React.createContext({});

export function GruposContextProvider({ children }) {
  const [grupos, setGrupos] = useState([]);

  return (
    <Context.Provider value={{ grupos, setGrupos }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
