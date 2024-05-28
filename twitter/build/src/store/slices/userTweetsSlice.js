import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tweets: [],
    total: 0,
    isFetching: false,
    error: null,
};
export const userTweetsSlice = createSlice({
    name: "userTweets",
    initialState,
    reducers: {
        fetchUserTweetsRequest(state) {
            state.isFetching = true;
            state.error = null;
        },
        fetchUserTweetsSuccess(state, action) {
            state.isFetching = false;
            state.tweets = [...state.tweets, ...action.payload.tweets];
            state.total = action.payload.total;
        },
        fetchUserTweetsFailure(state, action) {
            state.isFetching = false;
            state.error = action.payload;
        },
        resetUserTweets(state) {
            state.tweets = [];
        },
        addUserTweetLoacal(state, action) {
            state.tweets = [action.payload, ...state.tweets];
        },
    },
    selectors: {
        getUserTweets: (state) => state,
    },
});
export const { fetchUserTweetsRequest, fetchUserTweetsSuccess, fetchUserTweetsFailure, resetUserTweets, addUserTweetLoacal, } = userTweetsSlice.actions;
export const { getUserTweets } = userTweetsSlice.selectors;
export default userTweetsSlice.reducer;
