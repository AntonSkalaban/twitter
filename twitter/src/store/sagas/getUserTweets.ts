import { TweetApi } from "api/TweetApi";
import { UserApi } from "api/UserApi";
import { call, put } from "redux-saga/effects";
import {
  fetchUserTweetsFailure,
  fetchUserTweetsRequest,
  fetchUserTweetsSuccess,
} from "store/slices";
import { Tweet, TweetResponce, User } from "types/index";

export function* getUserTweetsSaga(action: { type: string; payload: string }) {
  try {
    yield put(fetchUserTweetsRequest());

    const tweetsResponce: TweetResponce[] = yield call(TweetApi.getTweets, action.payload);

    const { name, image }: User = yield call(UserApi.getUserDoc, tweetsResponce[0].userId);

    const tweets: Tweet[] = tweetsResponce.map(
      (tweet) => ({ ...tweet, userName: name, userImg: image }) as Tweet,
    );

    yield put(fetchUserTweetsSuccess(tweets));
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
    yield put(fetchUserTweetsFailure(errorMessage));
  }
}
