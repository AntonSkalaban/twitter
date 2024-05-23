import { createSlice } from "@reduxjs/toolkit";
import { User } from "types/user";

const initialState: User = {} as User;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: { payload: User }) => {
      return (state = payload);
    },
    updateUser: (state, { payload }: { payload: Partial<User> }) => {
      return (state = { ...state, ...payload });
    },
    removeUser: () => {
      return {} as User;
    },
  },
  selectors: {
    getUser: (state) => state,
  },
});

export const { setUser, updateUser, removeUser } = userSlice.actions;
export const { getUser } = userSlice.selectors;

export default userSlice.reducer;
