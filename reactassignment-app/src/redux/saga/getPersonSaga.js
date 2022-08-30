
import { call, put, takeLatest } from "redux-saga/effects"
import { getPerson } from "./request";
import * as actionTypes from "../types/personType";
import { setPerson } from "../actions/personAction";

function* getPersonSaga(action) {

    try {
        const response = yield call(getPerson);
        const { data } = response;

        yield put(setPerson(data));
    }
    catch (err) {
        console.log(err);
    }
}

export function* watchergetPersonSaga() {
    yield takeLatest(actionTypes.GET_Person, getPersonSaga);
}



