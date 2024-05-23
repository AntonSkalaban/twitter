import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "types/index";

interface State {
  users: User[];
  isFetching: boolean;
  error: null | string;
}

const initialState: State = {
  users: [] as User[],
  isFetching: false,
  error: null,
};

export const searchedUsersSlice = createSlice({
  name: "searchedUsers",
  initialState,
  reducers: {
    fetchSearchedUsersRequest(state) {
      state.isFetching = true;
      state.error = null;
    },
    fetchSearchedUsersSuccess(state, action: PayloadAction<User[]>) {
      state.isFetching = false;
      state.users = action.payload;
    },
    fetchSearchedUsersFailure(state, action: PayloadAction<string>) {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
  selectors: {
    getSearchedUsers: (state) => state,
  },
});

export const { fetchSearchedUsersRequest, fetchSearchedUsersSuccess, fetchSearchedUsersFailure } =
  searchedUsersSlice.actions;
export const { getSearchedUsers } = searchedUsersSlice.selectors;

export default searchedUsersSlice.reducer;
