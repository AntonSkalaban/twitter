import { createSlice } from "@reduxjs/toolkit";
import { Post } from "types/post";

// import { addPostSuccess } from "./addPostSlice";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [] as Post[],
    isFetching: false,
    error: null,
  },
  reducers: {
    fetchPostsRequest(state) {
      state.isFetching = true;
      state.error = null;
    },
    fetchPostsSuccess(state, action) {
      state.isFetching = false;
      state.posts = action.payload;
    },
    fetchPostsFailure(state, action) {
      state.isFetching = false;
      state.error = action.payload;
    },
    addPostLoacal(state, action) {
      state.posts = [action.payload, ...state.posts];
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(addPostSuccess, (state, action) => {
  //     const post = action.payload;
  //     state.posts.push(post);
  //   });
  // },

  selectors: {
    getUserPostsStatus: (state) => state,
  },
});

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure, addPostLoacal } =
  postsSlice.actions;
export const { getUserPostsStatus } = postsSlice.selectors;

export default postsSlice.reducer;
