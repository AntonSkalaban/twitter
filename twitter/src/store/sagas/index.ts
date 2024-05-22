import { takeEvery } from "redux-saga/effects";
import { TweetResponce } from "types/post";

import { createTweetSaga } from "./createTweetSaga";
import { getSearchedTweetsSaga } from "./getSearchedTweetsSaga";
import { getTweetsSaga } from "./getTweetsSaga";
import { getUserTweetsSaga } from "./getUserTweets";

export const getTweetsQuery = () => ({
  type: GET_TWEETS,
});

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
  return {
    type: CREATE_TWEET,
    payload: { tweetData, userData },
  };
};

export const GET_TWEETS = `tweets/getTweetsQuery`;
export const GET_USER_TWEETS = `tweets/getUserTweetsQuery`;
export const GET_SEARCHED_TWEETS = `posts/getSearchedTweetsQuery`;
export const CREATE_TWEET = `posts/createTweetQuery`;

export default function* rootSaga() {
  yield takeEvery(GET_TWEETS, getTweetsSaga);
  yield takeEvery(GET_USER_TWEETS, getUserTweetsSaga);
  yield takeEvery(GET_SEARCHED_TWEETS, getSearchedTweetsSaga);
  yield takeEvery(CREATE_TWEET, createTweetSaga);
}
