import { configureStore } from "@reduxjs/toolkit";
import padReducer from "../modules/Pad/PadSlice";

export default configureStore({
  reducer: {
    pad: padReducer,
  },
});
