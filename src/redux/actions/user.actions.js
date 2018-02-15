import store from '../store';

export const SET_USER_LOCATION = 'SET_USER_LOCATION';
export const SET_USER_LOCATION_SUCCEEDED = 'SET_USER_LOCATION_SUCCEEDED';
export const SET_USER_LOCATION_FAILED = 'SET_USER_LOCATION_FAILED';

export const setUserLocationAction = payload => ({
  type: SET_USER_LOCATION,
  payload,
});

export const setUserLocationCreator = payload => store.dispatch(setUserLocationAction(payload));
