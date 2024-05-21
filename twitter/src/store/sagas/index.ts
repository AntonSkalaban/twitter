import { takeEvery } from "redux-saga/effects";
import { TweetResponce } from "types/post";

import { createTweetSaga } from "./createTweetSaga";
import { getSearchedTweetsSaga } from "./getSearchedTweetsSaga";
// import { getUserPostsSaga } from "./getUserPostsSaga";
import { getUserTweetsSaga } from "./getUserTweets";

export const getUserTweetsQuery = (userId: string) => ({
  type: GET_USER_TWEETS,
  payload: { userId },
});

export const getSearchedTweetsQuery = (value: string) => ({
  type: GET_SEARCHED_TWEETS,
  payload: { value },
});

export const createTweetQuery = (
  tweetData: Omit<TweetResponce, "id">,
  userData: { userName: string; userImage: string | null },
) => {
  console.log("saga");
  return {
    type: CREATE_TWEET,
    payload: { tweetData, userData },
  };
};

export const GET_USER_TWEETS = `tweets/getUserTweetsQuery`;
export const GET_SEARCHED_TWEETS = `posts/getSearchedTweetsQuery`;

export const CREATE_TWEET = `posts/createTweetQuery`;

// export const GET_TWEETS = `posts/getTweets`;

// export const getTweets = () => ({
//   type: GET_TWEETS,
// });

export default function* rootSaga() {
  // yield takeEvery(GET_USER_POSTS, getUserPostsSaga);
  yield takeEvery(CREATE_TWEET, createTweetSaga);
  yield takeEvery(GET_USER_TWEETS, getUserTweetsSaga);
  yield takeEvery(GET_SEARCHED_TWEETS, getSearchedTweetsSaga);
}
