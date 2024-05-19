import { takeEvery } from "redux-saga/effects";
import { Post } from "types/post";

import { getAddedPostSaga } from "./getAddedPostSaga";
import { getTweetsSaga } from "./getTweets";
import { getUserPostsSaga } from "./getUserPostsSaga";

export const getUserPosts = (userId: string) => ({
  type: GET_USER_POSTS,
  payload: userId,
});

export const addPost = (post: Omit<Post, "id">) => ({
  type: ADD_POST,
  payload: post,
});

export const GET_USER_POSTS = `posts/getUserPosts`;
export const ADD_POST = `posts/getUserPostsSaga`;

export const GET_TWEETS = `posts/getTweets`;

export const getTweets = () => ({
  type: GET_TWEETS,
});

export default function* rootSaga() {
  yield takeEvery(GET_USER_POSTS, getUserPostsSaga);
  yield takeEvery(ADD_POST, getAddedPostSaga);
  yield takeEvery(GET_TWEETS, getTweetsSaga);
}
