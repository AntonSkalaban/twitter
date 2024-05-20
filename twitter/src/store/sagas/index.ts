import { takeEvery } from "redux-saga/effects";
import { TweetResponce } from "types/post";

import { createTweetSaga } from "./createTweetSaga";
// import { getUserPostsSaga } from "./getUserPostsSaga";
import { getUserTweetsSaga } from "./getUserTweets";

export const getUserTweetsQuery = (userId: string) => ({
  type: GET_USER_TWEETS,
  payload: userId,
});

export const createTweetQuery = (
  tweetData: Omit<TweetResponce, "id">,
  userData: { userName: string; userImage: string | null },
) => ({
  type: CREATE_TWEET,
  payload: { tweetData, userData },
});

export const GET_USER_TWEETS = `tweets/getUserTweetsQuery`;
export const CREATE_TWEET = `posts/createTweetSaga`;

export const GET_TWEETS = `posts/getTweets`;

export const getTweets = () => ({
  type: GET_TWEETS,
});

export default function* rootSaga() {
  // yield takeEvery(GET_USER_POSTS, getUserPostsSaga);
  yield takeEvery(CREATE_TWEET, createTweetSaga);
  yield takeEvery(GET_USER_TWEETS, getUserTweetsSaga);
}
