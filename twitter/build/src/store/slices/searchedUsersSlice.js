import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: [],
    isFetching: false,
    error: null,
};
export const searchedUsersSlice = createSlice({
    name: "searchedUsers",
    initialState,
    reducers: {
        fetchSearchedUsersRequest(state) {
            state.isFetching = true;
            state.error = null;
        },
        fetchSearchedUsersSuccess(state, action) {
            state.isFetching = false;
            state.users = action.payload;
        },
        fetchSearchedUsersFailure(state, action) {
            state.isFetching = false;
            state.error = action.payload;
        },
    },
    selectors: {
        getSearchedUsers: (state) => state,
    },
});
export const { fetchSearchedUsersRequest, fetchSearchedUsersSuccess, fetchSearchedUsersFailure } = searchedUsersSlice.actions;
export const { getSearchedUsers } = searchedUsersSlice.selectors;
export default searchedUsersSlice.reducer;
