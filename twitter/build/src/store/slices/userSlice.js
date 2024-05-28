import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            return (state = payload);
        },
        updateUser: (state, { payload }) => {
            return (state = { ...state, ...payload });
        },
        removeUser: () => {
            return {};
        },
    },
    selectors: {
        getUser: (state) => state,
    },
});
export const { setUser, updateUser, removeUser } = userSlice.actions;
export const { getUser } = userSlice.selectors;
export default userSlice.reducer;
