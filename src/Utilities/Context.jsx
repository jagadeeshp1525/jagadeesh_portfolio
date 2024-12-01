import React, { useState, createContext } from "react";
export const AppContext = createContext();

function AppProvider({ children }) {
  const [customClass, setCustomClass] = useState("");

  return (
    <AppContext.Provider value={{ customClass, setCustomClass }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
