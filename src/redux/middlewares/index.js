import { takeEvery } from 'redux-saga/effects';
import { setUserLocationMiddleware } from './user.middlewares';
import { searchMiddleware } from './api.middlewares';

export function* middlewares() {
  yield takeEvery('SET_USER_LOCATION', setUserLocationMiddleware);
  yield takeEvery('SEARCH_START', searchMiddleware);
}
