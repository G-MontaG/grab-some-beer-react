import {
  SEARCH_END,
  SEARCH_ERROR,
  SEARCH_FACEBOOK_PLACES_SUCCEEDED,
  SEARCH_FOURSQUARE_SUCCEEDED,
  SEARCH_GOOGLE_PLACES_SUCCEEDED, SEARCH_START,
} from '../actions/api.actions';

export default function apiReducers(state = { isLoading: false }, action) {
  switch (action.type) {
    case SEARCH_START:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case SEARCH_END:
      return Object.assign({}, state, {
        isLoading: false,
      });
    case SEARCH_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
      });
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
