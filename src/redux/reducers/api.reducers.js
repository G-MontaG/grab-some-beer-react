import { SEARCH_FOURSQUARE } from '../actions/api.actions';

export default function apiReducers(state = {}, action) {
  switch (action.type) {
    case SEARCH_FOURSQUARE:
      return Object.assign({}, state, {
        test: 'test',
      });
    default:
      return state;
  }
}
