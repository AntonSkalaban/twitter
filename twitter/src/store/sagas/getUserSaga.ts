// import { createPost } from "api/index";
// import { call, put } from "redux-saga/effects";
// import { addPostFailure, addPostRequest, addPostSuccess } from "store/slices/addPostSlice";
// import { Post } from "types/post";

// export function* getUserSaga(action: { type: string; payload: Omit<Post, "id"> }) {
//   try {
//     yield put(addPostRequest());

//     const postId: string = yield call(createPost, action.payload);

//     // yield put(addPostSuccess({ id: postId, ...action.payload }));
//   } catch (e) {
//     const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
//     yield put(addPostFailure(errorMessage));
//   }
// }
