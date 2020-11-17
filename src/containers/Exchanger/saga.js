import {takeEvery, call, put} from 'redux-saga/effects';
import {WALLETS_REQUEST} from './contstans';
import {walletsSuccess} from './actions';
import {getWallets} from '../../services/api';

export default function* exchangerSaga() {
    yield takeEvery(WALLETS_REQUEST, onWalletsRequset)
}

function* onWalletsRequset() {
    const wallets = yield call(getWallets);
    yield put(walletsSuccess(wallets));
}
