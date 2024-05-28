import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tweets: [],
    total: 0,
    isFetching: false,
    error: null,
};
export const searchedTweetsSlice = createSlice({
    name: "searchedTweets",
    initialState,
    reducers: {
        fetchSearchedTweetsRequest(state) {
            state.isFetching = true;
            state.error = null;
        },
        fetchSearchedTweetsSuccess(state, action) {
            state.isFetching = false;
            state.tweets = action.payload.tweets;
            state.total = action.payload.total;
        },
        fetchSearchedTweetsFailure(state, action) {
            state.isFetching = false;
            state.error = action.payload;
        },
    },
    selectors: {
        getSearchedTweets: (state) => state,
    },
});
export const { fetchSearchedTweetsRequest, fetchSearchedTweetsSuccess, fetchSearchedTweetsFailure, } = searchedTweetsSlice.actions;
export const { getSearchedTweets } = searchedTweetsSlice.selectors;
export default searchedTweetsSlice.reducer;
