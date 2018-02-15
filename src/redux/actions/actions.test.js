import {
  SEARCH_FOURSQUARE, SEARCH_GOOGLE_PLACES, SEARCH_FACEBOOK_PLACES, SEARCH_START,
  searchFoursquareAction, searchGooglePlacesAction, searchFacebookPlacesAction, searchStartAction,
} from './api.actions';
import { JOIN_LISTS_START, SELECT_LIST_ITEM, joinListsAction, selectListItemAction } from './app.actions';
import { ERROR, errorAction } from './error.actions';
import { SET_USER_LOCATION, setUserLocationAction } from './user.actions';

describe('action creators', () => {
  const payload = 'test payload';

  it('should create an action SEARCH_FOURSQUARE', () => {
    const expectedAction = {
      type: SEARCH_FOURSQUARE,
      payload,
    };
    expect(searchFoursquareAction(payload)).toEqual(expectedAction);
  });

  it('should create an action SEARCH_GOOGLE_PLACES', () => {
    const expectedAction = {
      type: SEARCH_GOOGLE_PLACES,
      payload,
    };
    expect(searchGooglePlacesAction(payload)).toEqual(expectedAction);
  });

  it('should create an action SEARCH_FACEBOOK_PLACES', () => {
    const expectedAction = {
      type: SEARCH_FACEBOOK_PLACES,
      payload,
    };
    expect(searchFacebookPlacesAction(payload)).toEqual(expectedAction);
  });

  it('should create an action SEARCH_START', () => {
    const expectedAction = {
      type: SEARCH_START,
      payload,
    };
    expect(searchStartAction(payload)).toEqual(expectedAction);
  });

  it('should create an action JOIN_LISTS_START', () => {
    const expectedAction = {
      type: JOIN_LISTS_START,
      payload,
    };
    expect(joinListsAction(payload)).toEqual(expectedAction);
  });

  it('should create an action SELECT_LIST_ITEM', () => {
    const expectedAction = {
      type: SELECT_LIST_ITEM,
      payload,
    };
    expect(selectListItemAction(payload)).toEqual(expectedAction);
  });

  it('should create an action ERROR', () => {
    const expectedAction = {
      type: ERROR,
      payload,
    };
    expect(errorAction(payload)).toEqual(expectedAction);
  });

  it('should create an action SET_USER_LOCATION', () => {
    const expectedAction = {
      type: SET_USER_LOCATION,
      payload,
    };
    expect(setUserLocationAction(payload)).toEqual(expectedAction);
  });
});
