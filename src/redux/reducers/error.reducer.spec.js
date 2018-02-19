import errorReducer from './error.reducer';
import { ERROR } from '../actions/error.actions';

jest.mock('../store');

describe('error reducers', () => {
  it('should return the initial state', () => {
    expect(errorReducer(undefined, {})).toEqual('');
  });

  it('should handle ERROR', () => {
    expect(errorReducer(undefined, { type: ERROR, payload: new Error('Test error') }))
      .toEqual(new Error('Test error'));
  });
});
