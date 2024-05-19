import { getUserPosts } from "api/index";
import { call, put } from "redux-saga/effects";
import { fetchPostsFailure, fetchPostsRequest, fetchPostsSuccess } from "store/slices/postsSlice";
import { Post } from "types/index";

export function* getUserPostsSaga(action: { type: string; payload: string }) {
  try {
    yield put(fetchPostsRequest());

    const result: Post[] = yield call(getUserPosts, action.payload);

    yield put(fetchPostsSuccess(result));
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
    yield put(fetchPostsFailure(errorMessage));
  }
}
