import { UserApi } from "api/UserApi";
import { call, put } from "redux-saga/effects";
import {
  fetchSearchedUsersFailure,
  fetchSearchedUsersRequest,
  fetchSearchedUsersSuccess,
} from "store/slices";
import { User } from "types/index";

export function* getSearchedUsersSaga(action: { type: string; payload: { value: string } }) {
  try {
    yield put(fetchSearchedUsersRequest());

    const users: User[] = yield call(UserApi.getUsers, "name", action.payload.value);

    yield put(fetchSearchedUsersSuccess(users));
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
    yield put(fetchSearchedUsersFailure(errorMessage));
  }
}
