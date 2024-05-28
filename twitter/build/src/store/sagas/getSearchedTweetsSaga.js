import { TweetApi } from "api/TweetApi";
import { UserApi } from "api/UserApi";
import { call, put } from "redux-saga/effects";
import { fetchSearchedTweetsFailure, fetchSearchedTweetsRequest, fetchSearchedTweetsSuccess, } from "store/slices";
export function* getSearchedTweetsSaga(action) {
    try {
        yield put(fetchSearchedTweetsRequest());
        const { tweets: tweetsResponce, total } = yield call(TweetApi.getSearchedTweets, action.payload.value, action.payload.lastTweet);
        const tweets = [];
        if (tweetsResponce.length > 0) {
            for (const tweet of tweetsResponce) {
                const { name, image } = yield call(UserApi.getUserDoc, tweet.userId);
                tweets.push({ ...tweet, userName: name, userImg: image });
            }
        }
        yield put(fetchSearchedTweetsSuccess({ tweets, total }));
    }
    catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
        yield put(fetchSearchedTweetsFailure(errorMessage));
    }
}
