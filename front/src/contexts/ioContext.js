import React, { useContext, useState, useEffect, createContext } from "react";
import socketIOClient from "socket.io-client";

const IoContext = createContext();

export function useIo() {
  return useContext(IoContext);
}

export function IoProvider({ children }) {
  const [io, setIo] = useState();

  useEffect(() => {
    setIo(socketIOClient("http://localhost:3001"));
  }, []);

  const value = {
    io,
  };

  return <IoContext.Provider value={value}>{children}</IoContext.Provider>;
}
