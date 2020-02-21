import { put, call, takeEvery } from "redux-saga/effects";
import { fetchExample } from "../modules/base/saga";
import axios from "axios";

const api = (param: number) =>
  axios.get(`https://jsonplaceholder.typicode.com/todos/${param}`);

function* fetchExampleSaga(action: ReturnType<typeof fetchExample.request>) {
  try {
    const { data } = yield call(api, action.payload);

    yield put(fetchExample.success(data));
  } catch (e) {
    yield put(fetchExample.failure(e.message));
  }
}

export default [takeEvery(fetchExample.request, fetchExampleSaga)];
