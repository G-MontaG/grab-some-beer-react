import { takeEvery } from 'redux-saga/effects';
import {
  searchFacebookPlacesMiddleware, searchFoursquareMiddleware,
  searchGooglePlacesMiddleware
} from './api.middlewares';
import { setUserLocationMiddleware } from './user.middlewares';

export function* middlewares() {
  yield takeEvery('SEARCH_FOURSQUARE', searchFoursquareMiddleware);
  yield takeEvery('SEARCH_GOOGLE_PLACES', searchGooglePlacesMiddleware);
  yield takeEvery('SEARCH_FACEBOOK_PLACES', searchFacebookPlacesMiddleware);

  yield takeEvery('SET_USER_LOCATION', setUserLocationMiddleware);
}
