import React, { useContext, useState, useEffect, createContext } from "react";

const MouseContext = createContext();

export function useMouse() {
  return useContext(MouseContext);
}

export function MouseProvider({ children }) {
  const [mouseDown, setMouseDown] = useState(false);

  const value = {
    mouseDown,
    setMouseDown,
  };

  return <MouseContext.Provider value={value}>{children}</MouseContext.Provider>;
}
