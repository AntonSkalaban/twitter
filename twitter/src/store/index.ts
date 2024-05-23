import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import addPostSlice from "./slices/addPostSlice";
import postsSlice from "./slices/postsSlice";
import rootSaga from "./sagas";
import {
  searchedTweetsSlice,
  searchedUsersSlice,
  themeSlice,
  tweetsSlice,
  userSlice,
  userTweetsSlice,
} from "./slices";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userSlice,
    userTweets: userTweetsSlice,
    searchedTweets: searchedTweetsSlice,
    searchedUsers: searchedUsersSlice,
    tweets: tweetsSlice,
    posts: postsSlice,
    addPost: addPostSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
