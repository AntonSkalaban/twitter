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

export const searchedTweetsSlice = createSlice({
  name: "searchedTweets",
  initialState,
  reducers: {
    fetchSearchedTweetsRequest(state) {
      state.isFetching = true;
      state.error = null;
    },
    fetchSearchedTweetsSuccess(state, action: PayloadAction<Tweet[]>) {
      state.isFetching = false;
      state.tweets = action.payload;
    },
    fetchSearchedTweetsFailure(state, action: PayloadAction<string>) {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
  selectors: {
    getSearchedTweets: (state) => state,
  },
});

export const {
  fetchSearchedTweetsRequest,
  fetchSearchedTweetsSuccess,
  fetchSearchedTweetsFailure,
} = searchedTweetsSlice.actions;
export const { getSearchedTweets } = searchedTweetsSlice.selectors;

export default searchedTweetsSlice.reducer;
