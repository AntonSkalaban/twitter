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

export const userTweetsSlice = createSlice({
  name: "userTweets",
  initialState,
  reducers: {
    fetchUserTweetsRequest(state) {
      state.isFetching = true;
      state.error = null;
    },
    fetchUserTweetsSuccess(state, action: PayloadAction<Tweet[]>) {
      state.isFetching = false;
      state.tweets = action.payload;
    },
    fetchUserTweetsFailure(state, action: PayloadAction<string>) {
      state.isFetching = false;
      state.error = action.payload;
    },
    addUserTweetLoacal(state, action: PayloadAction<Tweet>) {
      state.tweets = [action.payload, ...state.tweets];
    },
  },
  selectors: {
    getUserTweets: (state) => state,
  },
});

export const {
  fetchUserTweetsRequest,
  fetchUserTweetsSuccess,
  fetchUserTweetsFailure,
  addUserTweetLoacal,
} = userTweetsSlice.actions;
export const { getUserTweets } = userTweetsSlice.selectors;

export default userTweetsSlice.reducer;
