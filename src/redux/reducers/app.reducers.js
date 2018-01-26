import { JOIN_LISTS_END } from '../actions/app.actions';

export default function appReducers(state = {}, action) {
  switch (action.type) {
    case JOIN_LISTS_END:
      return Object.assign({}, state, {
        list: action.payload,
      });
    default:
      return state;
  }
}
