import { TweetApi } from "api/TweetApi";
import { UserApi } from "api/UserApi";
import { call, put } from "redux-saga/effects";
import {
  fetchSearchedTweetsFailure,
  fetchSearchedTweetsRequest,
  fetchSearchedTweetsSuccess,
} from "store/slices";
import { Tweet, TweetResponce, User } from "types/index";

export function* getSearchedTweetsSaga(action: { type: string; payload: { value: string } }) {
  try {
    yield put(fetchSearchedTweetsRequest());

    const tweetsResponce: TweetResponce[] = yield call(
      TweetApi.getSearchedTweets,
      action.payload.value,
    );

    const tweets = [];

    if (tweetsResponce.length > 0) {
      for (const tweet of tweetsResponce) {
        const { name, image }: User = yield call(UserApi.getUserDoc, tweet.userId);
        tweets.push({ ...tweet, userName: name, userImg: image } as Tweet);
      }
    }

    yield put(fetchSearchedTweetsSuccess(tweets));
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
    yield put(fetchSearchedTweetsFailure(errorMessage));
  }
}
