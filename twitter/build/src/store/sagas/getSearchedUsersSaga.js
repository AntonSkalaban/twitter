import { UserApi } from "api/UserApi";
import { call, put } from "redux-saga/effects";
import { fetchSearchedUsersFailure, fetchSearchedUsersRequest, fetchSearchedUsersSuccess, } from "store/slices";
export function* getSearchedUsersSaga(action) {
    try {
        yield put(fetchSearchedUsersRequest());
        const users = yield call(UserApi.getSearchedUsers, action.payload.value);
        yield put(fetchSearchedUsersSuccess(users));
    }
    catch (e) {
        const errorMessage = e instanceof Error ? e.message : "Unknown error occurred";
        yield put(fetchSearchedUsersFailure(errorMessage));
    }
}
