import { TweetApi } from "api/TweetApi";
import { UserApi } from "api/UserApi";
import { call, put } from "redux-saga/effects";
import { fetchUserTweetsFailure, fetchUserTweetsRequest, fetchUserTweetsSuccess, } from "store/slices";
export function* getUserTweetsSaga(action) {
    try {
        yield put(fetchUserTweetsRequest());
        const { tweets: tweetsResponce, total } = yield call(TweetApi.getTweets, action.payload.lastTweet, "userId", action.payload.userId);
        let tweets = [];
        if (tweetsResponce.length > 0) {
            const { name, image } = yield call(UserApi.getUserDoc, tweetsResponce[0].userId);
            tweets = tweetsResponce.map((tweet) => ({ ...tweet, userName: name, userImg: image }));
        }
        yield put(fetchUserTweetsSuccess({ tweets, total }));
    }
    catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
        yield put(fetchUserTweetsFailure(errorMessage));
    }
}
