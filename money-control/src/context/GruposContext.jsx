import React, { useState } from "react";

const Context = React.createContext({});

export function GruposContextProvider({ children }) {
  const [grupos, setGrupos] = useState([]);
  const [grupoSelected, setgrupoSelected] = useState([]);
  const [grupoTotal, setGrupoTotal] = useState([]);

  return (
    <Context.Provider
      value={{
        grupos,
        setGrupos,
        grupoSelected,
        setgrupoSelected,
        grupoTotal,
        setGrupoTotal,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
