import { configureStore } from "@reduxjs/toolkit";
import padReducer from "../modules/Pad/PadSlice";
import usersReducer from "../modules/Auth/UsersSlice";

export default configureStore({
  reducer: {
    pad: padReducer,
    users: usersReducer,
  },
});
