import socketIOClient from "socket.io-client";
import { setSoundToPlay } from "./modules/Pad/PadSlice";

// here is all the receivers for socketio
// used to update the store
// TODO: add rooms / namespace for more clarity
const connect = (url, store) => {
  const io = socketIOClient(url, { autoConnect: false });
  console.log("socket connected");
  io.connect();
  io.on("PLAYSOUND", data => {
    const sound = {
      timestamp: Date.now(),
      letter: data,
    };
    store.dispatch(setSoundToPlay(sound));
  });
};

export default connect;
