import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import addPostSlice from "./slices/addPostSlice";
import postsSlice from "./slices/postsSlice";
import rootSaga from "./sagas";
import { tweetsSlice, userSlice, userTweetsSlice } from "./slices";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userSlice,
    userTweets: userTweetsSlice,
    tweets: tweetsSlice,
    posts: postsSlice,
    addPost: addPostSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
