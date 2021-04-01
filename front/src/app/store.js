import { configureStore } from "@reduxjs/toolkit";
import soundsReducer from "../modules/Pad/SoundsSlice";

export default configureStore({
  reducer: {
    sounds: soundsReducer,
  },
});
