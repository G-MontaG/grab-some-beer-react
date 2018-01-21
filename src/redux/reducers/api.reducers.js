import { SEARCH_FOURSQUARE_SUCCEEDED } from '../actions/api.actions';

export default function apiReducers(state = {}, action) {
  switch (action.type) {
    case SEARCH_FOURSQUARE_SUCCEEDED:
      console.log(action);
      return Object.assign({}, state, {
        foursquareSearchResults: action.payload.response,
      });
    default:
      return state;
  }
}
