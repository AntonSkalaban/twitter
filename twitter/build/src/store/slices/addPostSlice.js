import { createSlice } from "@reduxjs/toolkit";
const addPostSlice = createSlice({
    name: "addPost",
    initialState: {
        isFetching: false,
        error: null,
    },
    reducers: {
        addPostRequest(state) {
            state.isFetching = true;
            state.error = null;
        },
        addPostSuccess(state) {
            state.isFetching = false;
        },
        addPostFailure(state, action) {
            state.isFetching = false;
            state.error = action.payload;
        },
    },
    selectors: {
        getAddPostStatus: (state) => state,
    },
});
export const { addPostRequest, addPostSuccess, addPostFailure } = addPostSlice.actions;
export const { getAddPostStatus } = addPostSlice.selectors;
export default addPostSlice.reducer;
