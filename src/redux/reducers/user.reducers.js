import { SET_USER_LOCATION_SUCCEEDED } from '../actions/user.actions';

export default function userReducers(state = {}, action) {
  switch (action.type) {
    case SET_USER_LOCATION_SUCCEEDED:
      return Object.assign({}, state, {
        position: action.payload,
      });
    default:
      return state;
  }
}
