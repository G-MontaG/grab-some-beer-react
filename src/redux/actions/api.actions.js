import store from './index';

export const SEARCH_FOURSQUARE = 'SEARCH_FOURSQUARE';

export const searchFoursquareAction = payload => ({
  type: SEARCH_FOURSQUARE,
  payload,
});

export const searchFoursquare = payload => store.dispatch(searchFoursquareAction(payload));
