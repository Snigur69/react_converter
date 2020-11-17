import exchangerSaga from "../containers/Exchanger/saga";
import {all} from 'redux-saga/effects';


export default function* rootSaga() {
    yield all([
       exchangerSaga()
    ]);
}