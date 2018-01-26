import { put } from 'redux-saga/effects';
import { errorCreator } from '../actions/error.actions';
import joinLists from '../../services/joinLists';

export default function* joinListsMiddleware(action) {
  joinLists(action.payload);
  yield null;
}
