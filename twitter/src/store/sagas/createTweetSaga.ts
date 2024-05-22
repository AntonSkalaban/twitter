import { TweetApi } from "api/index";
import { call, put } from "redux-saga/effects";
import { addUserTweetLoacal } from "store/slices";
import { addPostFailure, addPostRequest, addPostSuccess } from "store/slices/addPostSlice";
import { Tweet } from "types/post";

export function* createTweetSaga(action: {
  type: string;
  payload: { tweetData: Omit<Tweet, "id">; userData: { userName: string; userImg: string } };
}) {
  try {
    yield put(addPostRequest());

    const tweetId: string = yield call(TweetApi.addTweet, action.payload.tweetData);
    yield put(addPostSuccess());
    yield put(
      addUserTweetLoacal({
        id: tweetId,
        ...action.payload.tweetData,
        ...action.payload.userData,
      }),
    );
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
    yield put(addPostFailure(errorMessage));
  }
}
