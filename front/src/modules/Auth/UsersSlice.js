import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUsers: (state, action) => {
      const { users } = action.payload;
      state.list = action.payload;
    },
    addUser: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    removeUser: (state, action) => {
      const newUser = action.payload;

      state.list = state.list.filter(user => user.username !== newUser.username);
    },
  },
});

export const { setUsers, addUser, removeUser } = UsersSlice.actions;

export default UsersSlice.reducer;
