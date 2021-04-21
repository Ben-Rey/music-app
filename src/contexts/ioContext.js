import React, { useContext, useState, useEffect, createContext } from "react";
import socketIOClient from "socket.io-client";
import { setSoundToPlay } from "../modules/Pad/PadSlice";
import { setUsers, addUser, removeUser } from "../modules/Auth/UsersSlice";

import { useDispatch } from "react-redux";

const IoContext = createContext();

export function useIo() {
  return useContext(IoContext);
}

export function IoProvider({ children }) {
  const dispatch = useDispatch();

  const [socket, setSocket] = useState();

  function connect(username) {
    if (socket) {
      socket.auth = { username };

      socket.connect();

      socket.on("PLAYSOUND", data => {
        const sound = {
          timestamp: Date.now(),
          letter: data,
        };
        console.log("here");
        dispatch(setSoundToPlay(sound));
      });

      socket.on("connect_error", err => {
        if (err.message === "invalid username") {
          console.log("invalid username");
        }
      });

      socket.on("users", users => {
        // setUsers(newusers);
        dispatch(setUsers(users));
      });

      socket.on("user connected", user => {
        dispatch(addUser(user));

        // setUsers(users.concat(user));
        //   setUsers(prevUsers => {
        //     return [...prevUsers, ...user];
        //   });
      });

      socket.on("user disconnected", user => {
        dispatch(removeUser(user));

        // console.log(users);removeUser
        // setUsers(users.filter(user => user.email !== userDisconnected.email));
      });
    }
  }

  useEffect(() => {
    setSocket(socketIOClient(process.env.REACT_APP_API_BASE_URL, { autoConnect: false }));
  }, []);

  const value = {
    socket,
    connect,
  };

  return <IoContext.Provider value={value}>{children}</IoContext.Provider>;
}
