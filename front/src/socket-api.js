import socketIOClient from "socket.io-client";
// import { playSound } from "./modules/Pad/SoundsSlice";

// here is all the receivers for socketio
// used to update the store
// TODO: add rooms / namespace for more clarity
const connect = (url, store) => {
  const io = socketIOClient(url);
  console.log("socket connected");

  io.on("PLAYSOUND", data => {
    console.log(store);
    console.log(data);
    // console.log("socket received:", data);
    // store.dispatch(playSound("a"));
  });

  // io.on("UPDATE_LIKE", data => {
  //   console.log("socket received:", data);
  //   store.dispatch(update(data));
  // });
};

export default connect;
