import sinon from 'sinon';
import { put, call, all } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { searchCreator, SEARCH_ERROR, SEARCH_FOURSQUARE_SUCCEEDED } from '../actions/api.actions';
import { searchMiddleware, searchFoursquareMiddleware, searchGooglePlacesMiddleware, searchFacebookPlacesMiddleware } from './api.middlewares';
import { JOIN_LISTS_START } from '../actions/app.actions';
import store from '../store';
import { searchFoursquareRequest, searchGooglePlacesRequest, searchFacebookPlacesRequest } from '../../api/api.service';

const latitude = '52.520007'; // Berlin
const longitude = '13.404954';
const searchAction = searchCreator({ latitude, longitude });

describe('api search middleware', () => {
  const generator = cloneableGenerator(searchMiddleware)(searchAction);

  it('should try to fetch data', () => {
    expect(generator.next().value).toEqual(all([
      call(searchFoursquareMiddleware, searchAction),
      call(searchGooglePlacesMiddleware, searchAction),
      call(searchFacebookPlacesMiddleware, searchAction),
    ]));
  });

  it('should return data if search going well', () => {
    const clone = generator.clone();
    expect(clone.next(true).value).toEqual(
      put({ type: JOIN_LISTS_START, payload: store.getState().searchResults }),
    );
    expect(clone.next().done).toEqual(true);
  });

  it('should return error if search going bad', () => {
    const clone = generator.clone();
    expect(clone.throw(new Error('Test')).value).toEqual(
      put({ type: SEARCH_ERROR, message: 'Test' }),
    );
    expect(clone.next().done).toEqual(true);
  });
});

describe('api search middleware for foursquare', () => {
  const generator = cloneableGenerator(searchFoursquareMiddleware)(searchAction);

  it('should try to fetch data', () => {
    expect(generator.next().value).toEqual(call(searchFoursquareRequest, { latitude, longitude }));
  });

  // it('should return data if search going well', () => {
  //   const clone = generator.clone();
  //   expect(clone.next(true).value).toEqual(
  //     put({ type: SEARCH_FOURSQUARE_SUCCEEDED, payload: null }),
  //   );
  //   // expect(clone.next().done).toEqual(true);
  // });
});

describe('api search middleware for google places', () => {
  const generator = cloneableGenerator(searchGooglePlacesMiddleware)(searchAction);

  it('should try to fetch data', () => {
    expect(generator.next().value).toEqual(call(searchGooglePlacesRequest, { latitude, longitude }));
  });
});

describe('api search middleware for facebook places', () => {
  const generator = cloneableGenerator(searchFacebookPlacesMiddleware)(searchAction);

  it('should try to fetch data', () => {
    expect(generator.next().value).toEqual(call(searchFacebookPlacesRequest, { latitude, longitude }));
  });
});
