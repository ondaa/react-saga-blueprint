import { all } from "redux-saga/effects";

import baseSaga from "./baseSaga";

export default function* rootSaga() {
  yield all([...baseSaga]);
}
