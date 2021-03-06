import { put } from 'redux-saga/effects';
import { errorCreator } from '../actions/error.actions';
import { SET_USER_LOCATION_FAILED, SET_USER_LOCATION_SUCCEEDED } from '../actions/user.actions';

export default function* setUserLocationMiddleware() {
  const { geolocation } = navigator;

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Your browser doesn\'t support geolocation. Sorry :('));
    }

    geolocation.getCurrentPosition((position) => {
      resolve(position);
    }, () => {
      reject(new Error('Without geolocation we doesn\'t know where to search. Sorry :('));
    }, { enableHighAccuracy: true, timeout: 10 * 2000 });
  });

  try {
    const result = yield location;
    yield put({
      type: SET_USER_LOCATION_SUCCEEDED,
      payload: {
        latitude: result.coords.latitude,
        longitude: result.coords.longitude,
      },
    });
  } catch (error) {
    errorCreator(error.message);
    yield put({
      type: SET_USER_LOCATION_FAILED,
      payload: error,
    });
  }
}
