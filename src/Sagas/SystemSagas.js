import { put, takeLatest, call } from "redux-saga/effects";

function* groupSaga(action) {
  console.log("GROUP SAGA CALLED");
  localStorage.setItem("token", "tokencito");
  yield put({ type: "SAVE_INFO", userInfo: "sad" });
}

export const systemSagas = [takeLatest("GROUP_SAGA", groupSaga)];
