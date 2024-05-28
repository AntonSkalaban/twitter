import { TweetApi } from "api/TweetApi";
import { UserApi } from "api/UserApi";
import { call, put } from "redux-saga/effects";
import { fetchTweetsFailure, fetchTweetsRequest, fetchTweetsSuccess } from "store/slices";
export function* getTweetsSaga(action) {
    try {
        yield put(fetchTweetsRequest());
        const { tweets: tweetsResponce, total } = yield call(TweetApi.getTweets, action.payload.lastTweet);
        const tweets = [];
        for (const tweet of tweetsResponce) {
            const { name, image } = yield call(UserApi.getUserDoc, tweet.userId);
            tweets.push({ ...tweet, userName: name, userImg: image });
        }
        yield put(fetchTweetsSuccess({ tweets, total }));
    }
    catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
        yield put(fetchTweetsFailure(errorMessage));
    }
}
