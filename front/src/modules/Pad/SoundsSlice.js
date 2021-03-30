import { createSlice } from "@reduxjs/toolkit";

export const SoundsSlice = createSlice({
  name: "pad",
  initialState: {
    sounds: [],
  },
  reducers: {
    getSounds: (state, action) => {
      state.sounds = action.payload;
    },
    // updateLike: (state, action) => {
    //     state.value = action.payload;
    // },
  },
});

export const { getSounds } = SoundsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectPosts = state => state.posts.value;

export default SoundsSlice.reducer;
