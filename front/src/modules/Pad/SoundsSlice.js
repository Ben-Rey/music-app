import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";
import { Howl } from "howler";

export const SoundsSlice = createSlice({
  name: "pad",
  initialState: {
    sounds: [],
  },
  reducers: {
    setSounds: (state, action) => {
      console.log(action.payload);
      state.sounds = action.payload;
    },
    // updateLike: (state, action) => {
    //     state.value = action.payload;
    // },
  },
});

export const { setSounds } = SoundsSlice.actions;

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

export const playSound = (state, key) => {
  console.log(key);

  return state;
  // const key = keys.find(key => key.keyCode == e.keyCode);
  // if (key) {
  //   key.sound.play();
  //   playSound("z");
  // }
};

export const selectSounds = state => state.sounds;
export const test = () => console.log("here");

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectPosts = state => state.posts.value;

export default SoundsSlice.reducer;
