import store from '../store';

export const SEARCH_FOURSQUARE = 'SEARCH_FOURSQUARE';
export const SEARCH_FOURSQUARE_SUCCEEDED = 'SEARCH_FOURSQUARE_SUCCEEDED';
export const SEARCH_FOURSQUARE_FAILED = 'SEARCH_FOURSQUARE_FAILED';

export const searchFoursquareAction = (payload, fromCash) => ({
  type: SEARCH_FOURSQUARE,
  payload,
  fromCash,
});

export const searchFoursquareCreator = (payload, fromCash = false) => store.dispatch(
  searchFoursquareAction(payload, fromCash)
);

export const SEARCH_GOOGLE_PLACES = 'SEARCH_GOOGLE_PLACES';
export const SEARCH_GOOGLE_PLACES_SUCCEEDED = 'SEARCH_GOOGLE_PLACES_SUCCEEDED';
export const SEARCH_GOOGLE_PLACES_FAILED = 'SEARCH_GOOGLE_PLACES_FAILED';

export const searchGooglePlacesAction = (payload, fromCash) => ({
  type: SEARCH_GOOGLE_PLACES,
  payload,
  fromCash,
});

export const searchGooglePlacesCreator = (payload, fromCash = false) => store.dispatch(
  searchGooglePlacesAction(payload, fromCash)
);

export const SEARCH_FACEBOOK_PLACES = 'SEARCH_FACEBOOK_PLACES';
export const SEARCH_FACEBOOK_PLACES_SUCCEEDED = 'SEARCH_FACEBOOK_PLACES_SUCCEEDED';
export const SEARCH_FACEBOOK_PLACES_FAILED = 'SEARCH_FACEBOOK_PLACES_FAILED';

export const searchFacebookPlacesAction = (payload, fromCash) => ({
  type: SEARCH_FACEBOOK_PLACES,
  payload,
  fromCash,
});

export const searchFacebookPlacesCreator = (payload, fromCash = false) => store.dispatch(
  searchFacebookPlacesAction(payload, fromCash)
);

export const SEARCH_START = 'SEARCH_START';
export const SEARCH_END = 'SEARCH_END';
export const SEARCH_ERROR = 'SEARCH_ERROR';

export const searchStartAction = (payload, fromCash) => ({
  type: SEARCH_START,
  payload,
  fromCash,
});

export const searchCreator = (payload, fromCash = false) => store.dispatch(
  searchStartAction(payload, fromCash)
);
