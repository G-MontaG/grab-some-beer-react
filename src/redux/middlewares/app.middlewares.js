import { put } from 'redux-saga/effects';
import joinLists from '../../services/joinLists';
import { JOIN_LISTS_END } from '../actions/app.actions';
import { SEARCH_END } from '../actions/api.actions';

export default function* joinListsMiddleware(action) {
  yield put({ type: JOIN_LISTS_END, payload: joinLists(action.payload) });
  yield put({ type: SEARCH_END });
}
