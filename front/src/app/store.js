import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../modules/Pad/SoundsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
