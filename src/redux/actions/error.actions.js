import store from '../store';

export const ERROR = 'ERROR';

export const errorAction = payload => ({
  type: ERROR,
  payload,
});

export const errorCreator = payload => store.dispatch(errorAction(payload));
