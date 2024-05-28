import { TweetApi } from "api/index";
import { call, put } from "redux-saga/effects";
import { addTweetLoacal, addUserTweetLoacal } from "store/slices";
import { addPostFailure, addPostRequest, addPostSuccess } from "store/slices/addPostSlice";
export function* createTweetSaga(action) {
    try {
        yield put(addPostRequest());
        const tweetId = yield call(TweetApi.addTweet, action.payload.tweetData);
        yield put(addPostSuccess());
        const tweet = {
            id: tweetId,
            ...action.payload.tweetData,
            ...action.payload.userData,
        };
        yield put(addUserTweetLoacal(tweet));
        yield put(addTweetLoacal(tweet));
    }
    catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
        yield put(addPostFailure(errorMessage));
    }
}
