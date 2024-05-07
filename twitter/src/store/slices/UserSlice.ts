import { createSlice } from "@reduxjs/toolkit";
import { User } from "types/user";

const initialState: User = {
  id: "",
  email: "",
  name: "",
  birth: "",
  phone: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: { payload: User }) => {
      return (state = payload);
    },
  },
  selectors: {
    getUser: (state) => state,
  },
});

export const { setUser } = UserSlice.actions;
export const { getUser } = UserSlice.selectors;

export default UserSlice.reducer;
