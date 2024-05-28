import { TweetApi } from "api/TweetApi";
import { UserApi } from "api/UserApi";
import { call, put } from "redux-saga/effects";
import {
  fetchUserTweetsFailure,
  fetchUserTweetsRequest,
  fetchUserTweetsSuccess,
} from "store/slices";
import { Tweet, TweetResponce, User } from "types/index";

export function* getUserTweetsSaga(action: {
  type: string;
  payload: { lastTweet: null | number; userId: string };
}) {
  try {
    yield put(fetchUserTweetsRequest());
    const { tweets: tweetsResponce, total }: { tweets: TweetResponce[]; total: number } =
      yield call(TweetApi.getTweets, action.payload.lastTweet, "userId", action.payload.userId);

    let tweets: Tweet[] = [];

    if (tweetsResponce.length > 0) {
      const { name, image }: User = yield call(UserApi.getUserDoc, tweetsResponce[0].userId);
      tweets = tweetsResponce.map(
        (tweet) => ({ ...tweet, userName: name, userImg: image }) as Tweet,
      );
    }
    yield put(fetchUserTweetsSuccess({ tweets, total }));
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
    yield put(fetchUserTweetsFailure(errorMessage));
  }
}
