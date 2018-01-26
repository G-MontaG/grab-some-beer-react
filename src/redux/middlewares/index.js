import { takeEvery } from 'redux-saga/effects';
import setUserLocationMiddleware from './user.middlewares';
import { searchMiddleware } from './api.middlewares';
import joinListsMiddleware from './app.middlewares';

export default function* middlewares() {
  yield takeEvery('SET_USER_LOCATION', setUserLocationMiddleware);
  yield takeEvery('SEARCH_START', searchMiddleware);
  yield takeEvery('JOIN_LISTS_START', joinListsMiddleware);
}
