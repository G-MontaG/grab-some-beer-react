import store from '../store';

export const SEARCH_FOURSQUARE = 'SEARCH_FOURSQUARE';
export const SEARCH_FOURSQUARE_SUCCEEDED = 'SEARCH_FOURSQUARE_SUCCEEDED';
export const SEARCH_FOURSQUARE_FAILED = 'SEARCH_FOURSQUARE_FAILED';

export const searchFoursquareAction = payload => ({
  type: SEARCH_FOURSQUARE,
  payload,
});

export const searchFoursquareCreator = payload => store.dispatch(searchFoursquareAction(payload));
