import { createPost } from "api/index";
import { call, put } from "redux-saga/effects";
import { addPostFailure, addPostRequest, addPostSuccess } from "store/slices/addPostSlice";
import { addPostLoacal } from "store/slices/postsSlice";
import { Post } from "types/post";

export function* getAddedPostSaga(action: { type: string; payload: Omit<Post, "id"> }) {
  try {
    yield put(addPostRequest());

    const postId: string = yield call(createPost, action.payload);

    yield put(addPostSuccess());
    yield put(addPostLoacal({ postId, ...action.payload }));
    console.log("added saga");
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
    yield put(addPostFailure(errorMessage));
  }
}
