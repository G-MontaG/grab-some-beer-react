import apiReducers from './api.reducers';
import {
  SEARCH_END,
  SEARCH_ERROR,
  SEARCH_FACEBOOK_PLACES_SUCCEEDED,
  SEARCH_FOURSQUARE_SUCCEEDED,
  SEARCH_GOOGLE_PLACES_SUCCEEDED, SEARCH_START,
} from '../actions/api.actions';

jest.mock('../store');

describe('api reducers', () => {
  it('should return the initial state', () => {
    expect(apiReducers(undefined, {})).toEqual({ isLoading: false });
  });

  it('should handle JOIN_LISTS_END', () => {
    expect(apiReducers({ isLoading: false }, { type: SEARCH_START }))
      .toEqual({ isLoading: true });
  });

  it('should handle SEARCH_END', () => {
    expect(apiReducers({ isLoading: true }, { type: SEARCH_END }))
      .toEqual({ isLoading: false });
  });

  it('should handle SEARCH_ERROR', () => {
    expect(apiReducers({ isLoading: true }, { type: SEARCH_ERROR }))
      .toEqual({ isLoading: false });
  });

  it('should handle SEARCH_FOURSQUARE_SUCCEEDED', () => {
    expect(apiReducers(
      undefined,
      { type: SEARCH_FOURSQUARE_SUCCEEDED, payload: [{ name: 'Test' }] },
    )).toEqual({ isLoading: false, foursquareSearchResults: [{ name: 'Test' }] });
  });

  it('should handle SEARCH_GOOGLE_PLACES_SUCCEEDED', () => {
    expect(apiReducers(
      undefined,
      { type: SEARCH_GOOGLE_PLACES_SUCCEEDED, payload: [{ name: 'Test' }] },
    )).toEqual({ isLoading: false, googleSearchResults: [{ name: 'Test' }] });
  });

  it('should handle SEARCH_FACEBOOK_PLACES_SUCCEEDED', () => {
    expect(apiReducers(
      undefined,
      { type: SEARCH_FACEBOOK_PLACES_SUCCEEDED, payload: [{ name: 'Test' }] },
    )).toEqual({ isLoading: false, facebookSearchResults: [{ name: 'Test' }] });
  });
});
