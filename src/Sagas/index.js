import { all } from "redux-saga/effects";
import { systemSagas } from "./SystemSagas";
export default function* rootSaga() {
  yield all([...systemSagas]);
}
