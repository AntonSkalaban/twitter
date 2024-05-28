import { takeEvery } from "redux-saga/effects";
import { TweetResponce } from "types/post";

import { createTweetSaga } from "./createTweetSaga";
import { getSearchedTweetsSaga } from "./getSearchedTweetsSaga";
import { getSearchedUsersSaga } from "./getSearchedUsersSaga";
import { getTweetsSaga } from "./getTweetsSaga";
import { getUserTweetsSaga } from "./getUserTweets";

export const getTweetsQuery = (lastTweet: number | null) => ({
  type: GET_TWEETS,
  payload: { lastTweet },
});

export const getUserTweetsQuery = (userId: string, lastTweet: number | null) => ({
  type: GET_USER_TWEETS,
  payload: { userId, lastTweet },
});

export const getSearchedTweetsQuery = (value: string, lastTweet: number | null) => ({
  type: GET_SEARCHED_TWEETS,
  payload: { value, lastTweet },
});

export const getSearchedUsersQuery = (value: string) => ({
  type: GET_SEARCHED_USERS,
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
export const GET_SEARCHED_TWEETS = `tweets/getSearchedTweetsQuery`;
export const CREATE_TWEET = `tweets/createTweetQuery`;
export const GET_SEARCHED_USERS = `users/getSearchedUsersQuery`;

export default function* rootSaga() {
  yield takeEvery(GET_TWEETS, getTweetsSaga);
  yield takeEvery(GET_USER_TWEETS, getUserTweetsSaga);
  yield takeEvery(GET_SEARCHED_TWEETS, getSearchedTweetsSaga);
  yield takeEvery(GET_SEARCHED_USERS, getSearchedUsersSaga);
  yield takeEvery(CREATE_TWEET, createTweetSaga);
}
