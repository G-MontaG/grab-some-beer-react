import { call, put, takeEvery } from 'redux-saga/effects';
import { SEARCH_FOURSQUARE_FAILED, SEARCH_FOURSQUARE_SUCCEEDED } from '../actions/api.actions';
import { searchFoursquareRequest } from '../../api/api.service';
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

function* apiMiddlewares() {
  yield takeEvery('SEARCH_FOURSQUARE', searchFoursquareMiddleware);
}

export default apiMiddlewares;
