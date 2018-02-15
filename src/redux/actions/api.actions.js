import store from '../store';

export const SEARCH_FOURSQUARE = 'SEARCH_FOURSQUARE';
export const SEARCH_FOURSQUARE_SUCCEEDED = 'SEARCH_FOURSQUARE_SUCCEEDED';
export const SEARCH_FOURSQUARE_FAILED = 'SEARCH_FOURSQUARE_FAILED';

export const searchFoursquareAction = payload => ({
  type: SEARCH_FOURSQUARE,
  payload,
});

export const searchFoursquareCreator = payload => store.dispatch(searchFoursquareAction(payload));

export const SEARCH_GOOGLE_PLACES = 'SEARCH_GOOGLE_PLACES';
export const SEARCH_GOOGLE_PLACES_SUCCEEDED = 'SEARCH_GOOGLE_PLACES_SUCCEEDED';
export const SEARCH_GOOGLE_PLACES_FAILED = 'SEARCH_GOOGLE_PLACES_FAILED';

export const searchGooglePlacesAction = payload => ({
  type: SEARCH_GOOGLE_PLACES,
  payload,
});

export const searchGooglePlacesCreator = payload => store.dispatch(searchGooglePlacesAction(payload));

export const SEARCH_FACEBOOK_PLACES = 'SEARCH_FACEBOOK_PLACES';
export const SEARCH_FACEBOOK_PLACES_SUCCEEDED = 'SEARCH_FACEBOOK_PLACES_SUCCEEDED';
export const SEARCH_FACEBOOK_PLACES_FAILED = 'SEARCH_FACEBOOK_PLACES_FAILED';

export const searchFacebookPlacesAction = payload => ({
  type: SEARCH_FACEBOOK_PLACES,
  payload,
});

export const searchFacebookPlacesCreator = payload => store.dispatch(searchFacebookPlacesAction(payload));

export const SEARCH_START = 'SEARCH_START';
export const SEARCH_END = 'SEARCH_END';
export const SEARCH_ERROR = 'SEARCH_ERROR';

export const searchStartAction = payload => ({
  type: SEARCH_START,
  payload,
});

export const searchCreator = payload => store.dispatch(searchStartAction(payload));
