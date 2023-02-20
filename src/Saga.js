import { put, takeEvery } from "redux-saga/effects";
import { SHOW_LIST } from "./constant";
import axios from "axios";

function* getData() {
  let data = yield axios.get("http://localhost:3000/posts");
  yield put({
    type: "Api_data",
    payload: {
      data: data.data,
    },
  });
}

function* delData(id) {
  console.log(id);
  yield axios.delete(`http://localhost:3000/posts/${id.id}`);
}

function* postData(data) {
  axios.post(`http://localhost:3000/posts`, data.data);
  yield put({
    type: "LIST_OF_ITEM",
    payload: {
      data: data.data,
    },
  });
}

function* editData(data) {
  console.log(data.id);
  const allInputData = {
    id:data.id,
    data: data.data,
  };
  yield axios.put(`http://localhost:3000/posts/${data.id}`, allInputData);
      yield put({
        type: "LIST_OF_ITEM",
        payload: {
          data: data.data,
          id: data.data.id,
        },
      });
}

function* saga() {
  yield takeEvery("SHOW_LIST", getData);
  yield takeEvery("DELETE_ITEM", delData);
  yield takeEvery("Post", postData);
  yield takeEvery("edit", editData);
}
export default saga;
