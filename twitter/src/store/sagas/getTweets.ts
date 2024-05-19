import { collection, onSnapshot } from "firebase/firestore";
import { put } from "redux-saga/effects";
import { fetchPostsFailure, fetchPostsSuccess } from "store/slices/postsSlice";
import { db } from "constants/index";

export function* getTweetsSaga() {
  try {
    const tweets = [];
    const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
      snapshot.forEach((doc) => {
        tweets.push({ id: doc.id, ...doc.data() });
      });
    });

    yield put(fetchPostsSuccess(tweets));

    return unsub;
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
    yield put(fetchPostsFailure(errorMessage));
  }
}
