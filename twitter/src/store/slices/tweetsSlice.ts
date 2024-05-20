import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tweet } from "types/post";

interface State {
  tweets: Tweet[];
  isFetching: boolean;
  error: null | string;
}

const initialState: State = {
  tweets: [] as Tweet[],
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
    fetchTweetsSuccess(state, action: PayloadAction<Tweet[]>) {
      state.isFetching = false;
      state.tweets = action.payload;
    },
    fetchTweetsFailure(state, action: PayloadAction<string>) {
      state.isFetching = false;
      state.error = action.payload;
    },
    addTweetLoacal(state, action: PayloadAction<Tweet>) {
      state.tweets = [action.payload, ...state.tweets];
    },
  },
  selectors: {
    getTweets: (state) => state,
  },
});

export const { fetchTweetsRequest, fetchTweetsSuccess, fetchTweetsFailure, addTweetLoacal } =
  tweetsSlice.actions;
export const { getTweets } = tweetsSlice.selectors;

export default tweetsSlice.reducer;
