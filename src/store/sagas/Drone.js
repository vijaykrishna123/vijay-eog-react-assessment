import { takeEvery, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import API from "../api";

function* makeDronAPICall(action){
    const {data:{data} } = yield call(API.loadDrone);
    console.log(data)
    yield put({type:actions.STORE_DRON,data})
}
function* watchDrone() {

  yield takeEvery(actions.LOAD_DRON, makeDronAPICall);
}

export default [watchDrone];
