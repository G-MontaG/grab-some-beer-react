import { call, put, all } from 'redux-saga/effects';
import {
  SEARCH_END,
  SEARCH_ERROR,
  SEARCH_FACEBOOK_PLACES_FAILED,
  SEARCH_FACEBOOK_PLACES_SUCCEEDED,
  SEARCH_FOURSQUARE_FAILED,
  SEARCH_FOURSQUARE_SUCCEEDED,
  SEARCH_GOOGLE_PLACES_FAILED,
  SEARCH_GOOGLE_PLACES_SUCCEEDED,
} from '../actions/api.actions';
import {
  searchFacebookPlacesRequest,
  searchFoursquareRequest,
  searchGooglePlacesRequest,
} from '../../api/api.service';
import { errorCreator } from '../actions/error.actions';
import { mapFoursquareResultsToList, mapGooglePlacesResultsToList, mapFacebookPlacesResultsToList } from '../../services/dataToListMappers';
import { JOIN_LISTS_START } from '../actions/app.actions';
import store from '../store';

function getFromLocalStorage(key) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return null;
}

export function* searchFoursquareMiddleware(action) {
  try {
    if (action.fromCash) {
      const fromStore = getFromLocalStorage('foursquare');
      if (fromStore) {
        yield put({
          type: SEARCH_FOURSQUARE_SUCCEEDED,
          payload: fromStore,
        });
      }
    }
    const response = yield call(searchFoursquareRequest, action.payload);
    if (response.status === 200) {
      const payload = response.data.response.venues.map(mapFoursquareResultsToList);
      yield put({
        type: SEARCH_FOURSQUARE_SUCCEEDED,
        payload,
      });
      localStorage.setItem('foursquare', JSON.stringify(payload));
    } else {
      errorCreator('Fail search on foursquare');
      yield put({
        type: SEARCH_FOURSQUARE_FAILED,
        payload: response,
      });
    }
  } catch (e) {
    errorCreator('Fail search on foursquare');
    yield put({
      type: SEARCH_FOURSQUARE_FAILED,
      message: e.message,
    });
  }
}

export function* searchGooglePlacesMiddleware(action) {
  try {
    if (action.fromCash) {
      const fromStore = getFromLocalStorage('google');
      if (fromStore) {
        yield put({
          type: SEARCH_GOOGLE_PLACES_SUCCEEDED,
          payload: fromStore,
        });
      }
    }
    const response = yield call(searchGooglePlacesRequest, action.payload);
    if (response.status === 200) {
      const payload = response.data.results.map(mapGooglePlacesResultsToList);
      yield put({
        type: SEARCH_GOOGLE_PLACES_SUCCEEDED,
        payload,
      });
      localStorage.setItem('google', JSON.stringify(payload));
    } else {
      errorCreator('Fail search on google places');
      yield put({
        type: SEARCH_GOOGLE_PLACES_FAILED,
        payload: response,
      });
    }
  } catch (e) {
    errorCreator('Fail search on google places');
    yield put({
      type: SEARCH_GOOGLE_PLACES_FAILED,
      message: e.message,
    });
  }
}

export function* searchFacebookPlacesMiddleware(action) {
  try {
    if (action.fromCash) {
      const fromStore = getFromLocalStorage('facebook');
      if (fromStore) {
        yield put({
          type: SEARCH_FACEBOOK_PLACES_SUCCEEDED,
          payload: fromStore,
        });
      }
    }
    const response = yield call(searchFacebookPlacesRequest, action.payload);
    if (response.status === 200) {
      const payload = response.data.data.map(mapFacebookPlacesResultsToList);
      yield put({
        type: SEARCH_FACEBOOK_PLACES_SUCCEEDED,
        payload,
      });
      localStorage.setItem('facebook', JSON.stringify(payload));
    } else {
      errorCreator('Fail search on google places');
      yield put({
        type: SEARCH_FACEBOOK_PLACES_FAILED,
        payload: response,
      });
    }
  } catch (e) {
    errorCreator('Fail search on google places');
    yield put({
      type: SEARCH_FACEBOOK_PLACES_FAILED,
      message: e.message,
    });
  }
}

export function* searchMiddleware(action) {
  try {
    yield all([
      call(searchFoursquareMiddleware, action),
      call(searchGooglePlacesMiddleware, action),
      call(searchFacebookPlacesMiddleware, action),
    ]);
    yield put({ type: JOIN_LISTS_START, payload: store.getState().searchResults });
    yield put({ type: SEARCH_END });
  } catch (e) {
    yield put({
      type: SEARCH_ERROR,
      message: e.message,
    });
  }
}
