import { call, put, takeEvery } from 'redux-saga/effects';
import {
  SEARCH_FACEBOOK_PLACES_FAILED,
  SEARCH_FACEBOOK_PLACES_SUCCEEDED,
  SEARCH_FOURSQUARE_FAILED, SEARCH_FOURSQUARE_SUCCEEDED, SEARCH_GOOGLE_PLACES_FAILED,
  SEARCH_GOOGLE_PLACES_SUCCEEDED
} from '../actions/api.actions';
import {
  searchFacebookPlacesRequest, searchFoursquareRequest,
  searchGooglePlacesRequest
} from '../../api/api.service';
import { errorCreator } from '../actions/error.actions';

function* searchFoursquareMiddleware(action) {
  try {
    const response = yield call(searchFoursquareRequest, action.payload);
    if (response.status === 200) {
      yield put({ type: SEARCH_FOURSQUARE_SUCCEEDED, payload: response.data });
    } else {
      errorCreator('Fail search on foursquare');
      yield put({ type: SEARCH_FOURSQUARE_FAILED, payload: response });
    }
  } catch (e) {
    errorCreator('Fail search on foursquare');
    yield put({ type: SEARCH_FOURSQUARE_FAILED, message: e.message });
  }
}

function* searchGooglePlacesMiddleware(action) {
  try {
    const response = yield call(searchGooglePlacesRequest, action.payload);
    if (response.status === 200) {
      yield put({ type: SEARCH_GOOGLE_PLACES_SUCCEEDED, payload: response.data });
    } else {
      errorCreator('Fail search on google places');
      yield put({ type: SEARCH_GOOGLE_PLACES_FAILED, payload: response });
    }
  } catch (e) {
    errorCreator('Fail search on google places');
    yield put({ type: SEARCH_GOOGLE_PLACES_FAILED, message: e.message });
  }
}

function* searchFacebookPlacesMiddleware(action) {
  try {
    const response = yield call(searchFacebookPlacesRequest, action.payload);
    if (response.status === 200) {
      yield put({ type: SEARCH_FACEBOOK_PLACES_SUCCEEDED, payload: response.data });
    } else {
      errorCreator('Fail search on google places');
      yield put({ type: SEARCH_FACEBOOK_PLACES_FAILED, payload: response });
    }
  } catch (e) {
    errorCreator('Fail search on google places');
    yield put({ type: SEARCH_FACEBOOK_PLACES_FAILED, message: e.message });
  }
}

function* apiMiddlewares() {
  yield takeEvery('SEARCH_FOURSQUARE', searchFoursquareMiddleware);
  yield takeEvery('SEARCH_GOOGLE_PLACES', searchGooglePlacesMiddleware);
  yield takeEvery('SEARCH_FACEBOOK_PLACES', searchFacebookPlacesMiddleware);
}

export default apiMiddlewares;
