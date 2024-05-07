import { createSlice } from "@reduxjs/toolkit";

interface User {
  email: string;
  id: string;
  token: string;
}
const initialState: User = {
  id: "",
  email: "",
  token: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: { payload: User }) => {
      state = payload;
    },
  },
  selectors: {
    getUser: (state) => state,
  },
});

export const { setUser } = UserSlice.actions;
export const { getUser } = UserSlice.selectors;

export default UserSlice.reducer;
