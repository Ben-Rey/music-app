import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";
import { Howl } from "howler";

export const PadSlice = createSlice({
  name: "pad",
  initialState: {
    sounds: [],
    soundToPlay: "",
  },
  reducers: {
    setSounds: (state, action) => {
      console.log(action.payload);
      state.sounds = action.payload;
    },
    setSoundToPlay: (state, action) => {
      state.soundToPlay = action.payload;
    },
  },
});

export const { setSounds, setSoundToPlay } = PadSlice.actions;

export const getSoundsFromGroup = (group = "") => dispatch => {
  api.get(`/sounds/${group}`).then(res => {
    const sounds = res.data.map(sound => ({
      letter: sound.key,
      keyCode: sound.keyCode,
      sound: new Howl({
        src: [`http://localhost:3001/sounds/${sound.name}`],
      }),
    }));
    dispatch(setSounds(sounds));
  });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectPosts = state => state.posts.value;

export default PadSlice.reducer;
