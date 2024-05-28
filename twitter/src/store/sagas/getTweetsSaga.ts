import { TweetApi } from "api/TweetApi";
import { UserApi } from "api/UserApi";
import { call, put } from "redux-saga/effects";
import { fetchTweetsFailure, fetchTweetsRequest, fetchTweetsSuccess } from "store/slices";
import { Tweet, TweetResponce, User } from "types/index";

export function* getTweetsSaga(action: { type: string; payload: { lastTweet: number | null } }) {
  try {
    yield put(fetchTweetsRequest());
    const { tweets: tweetsResponce, total } = yield call(
      TweetApi.getTweets,
      action.payload.lastTweet,
    );

    const tweets: Tweet[] = [];

    for (const tweet of tweetsResponce as TweetResponce[]) {
      const { name, image }: User = yield call(UserApi.getUserDoc, tweet.userId);
      tweets.push({ ...tweet, userName: name, userImg: image } as Tweet);
    }

    yield put(fetchTweetsSuccess({ tweets, total }));
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
    yield put(fetchTweetsFailure(errorMessage));
  }
}
