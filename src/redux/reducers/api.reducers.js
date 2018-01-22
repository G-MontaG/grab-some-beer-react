import {
  SEARCH_FACEBOOK_PLACES_SUCCEEDED,
  SEARCH_FOURSQUARE_SUCCEEDED,
  SEARCH_GOOGLE_PLACES_SUCCEEDED
} from '../actions/api.actions';

export default function apiReducers(state = {}, action) {
  switch (action.type) {
    case SEARCH_FOURSQUARE_SUCCEEDED:
      return Object.assign({}, state, {
        foursquareSearchResults: action.payload.response.venues,
      });
    case SEARCH_GOOGLE_PLACES_SUCCEEDED:
      return Object.assign({}, state, {
        googleSearchResults: action.payload.results,
      });
    case SEARCH_FACEBOOK_PLACES_SUCCEEDED:
      return Object.assign({}, state, {
        facebookSearchResults: action.payload.data,
      });
    default:
      return state;
  }
}
