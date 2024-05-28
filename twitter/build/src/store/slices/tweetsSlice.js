import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tweets: [],
    total: 0,
    isFetching: false,
    error: null,
};
export const tweetsSlice = createSlice({
    name: "tweets",
    initialState,
    reducers: {
        fetchTweetsRequest(state) {
            state.isFetching = true;
            state.error = null;
        },
        fetchTweetsSuccess(state, action) {
            state.isFetching = false;
            state.tweets = [...state.tweets, ...action.payload.tweets];
            state.total = action.payload.total;
        },
        fetchTweetsFailure(state, action) {
            state.isFetching = false;
            state.error = action.payload;
        },
        addTweetLoacal(state, action) {
            state.tweets = [action.payload, ...state.tweets];
        },
        resetTweets(state) {
            state.tweets = [];
        },
    },
    selectors: {
        getTweets: (state) => state,
    },
});
export const { fetchTweetsRequest, fetchTweetsSuccess, fetchTweetsFailure, addTweetLoacal, resetTweets, } = tweetsSlice.actions;
export const { getTweets } = tweetsSlice.selectors;
export default tweetsSlice.reducer;
