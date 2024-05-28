import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tweet } from "types/post";

interface State {
  tweets: Tweet[];
  total: number;
  isFetching: boolean;
  error: null | string;
}

const initialState: State = {
  tweets: [] as Tweet[],
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
    fetchTweetsSuccess(state, action: PayloadAction<{ tweets: Tweet[]; total: number }>) {
      state.isFetching = false;
      state.tweets = [...state.tweets, ...action.payload.tweets];
      state.total = action.payload.total;
    },
    fetchTweetsFailure(state, action: PayloadAction<string>) {
      state.isFetching = false;
      state.error = action.payload;
    },
    addTweetLoacal(state, action: PayloadAction<Tweet>) {
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

export const {
  fetchTweetsRequest,
  fetchTweetsSuccess,
  fetchTweetsFailure,
  addTweetLoacal,
  resetTweets,
} = tweetsSlice.actions;
export const { getTweets } = tweetsSlice.selectors;

export default tweetsSlice.reducer;
