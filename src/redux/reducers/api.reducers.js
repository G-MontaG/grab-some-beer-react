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
      return { ...state, isLoading: true };
    case SEARCH_END:
      return { ...state, isLoading: false };
    case SEARCH_ERROR:
      return { ...state, isLoading: false };
    case SEARCH_FOURSQUARE_SUCCEEDED:
      return { ...state, foursquareSearchResults: action.payload };
    case SEARCH_GOOGLE_PLACES_SUCCEEDED:
      return { ...state, googleSearchResults: action.payload };
    case SEARCH_FACEBOOK_PLACES_SUCCEEDED:
      return { ...state, facebookSearchResults: action.payload };
    default:
      return state;
  }
}
