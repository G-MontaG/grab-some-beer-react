import userReducers from './user.reducers';
import { SET_USER_LOCATION_SUCCEEDED } from '../actions/user.actions';

jest.mock('../store');

describe('user reducers', () => {
  it('should return the initial state', () => {
    expect(userReducers(undefined, {})).toEqual({});
  });

  it('should handle SET_USER_LOCATION_SUCCEEDED', () => {
    expect(userReducers({ userInfo: 'Some data' }, { type: SET_USER_LOCATION_SUCCEEDED, payload: { location: 'Test location' } }))
      .toEqual({ userInfo: 'Some data', position: { location: 'Test location' } });
  });
});
