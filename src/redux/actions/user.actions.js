import store from '../store';

export const SET_USER_LOCATION = 'SET_USER_LOCATION';
export const SET_USER_LOCATION_SUCCEEDED = 'SET_USER_LOCATION_SUCCEEDED';
export const SET_USER_LOCATION_FAILED = 'SET_USER_LOCATION_FAILED';

export const setUserLocationAction = () => ({
  type: SET_USER_LOCATION,
});

export const setUserLocationCreator = () => store.dispatch(
  setUserLocationAction()
);
