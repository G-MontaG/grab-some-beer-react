import appReducers from './app.reducers';
import { JOIN_LISTS_END, SELECT_LIST_ITEM } from '../actions/app.actions';

jest.mock('../store');

describe('app reducers', () => {
  it('should return the initial state', () => {
    expect(appReducers(undefined, {})).toEqual({});
  });

  it('should handle JOIN_LISTS_END', () => {
    expect(appReducers({ someData: 'some data' }, { type: JOIN_LISTS_END, payload: [{ name: 'Test' }] }))
      .toEqual({ someData: 'some data', list: [{ name: 'Test' }] });
  });

  it('should handle SELECT_LIST_ITEM and select item by index', () => {
    expect(appReducers(
      { list: [{ name: 'Test' }, { name: 'Test 2' }] },
      { type: SELECT_LIST_ITEM, payload: 1 },
    )).toEqual({ list: [{ name: 'Test', selected: false }, { name: 'Test 2', selected: true }] });
  });

  it('should deselect items if they are not selected', () => {
    expect(appReducers(
      { list: [{ name: 'Test', selected: true }, { name: 'Test 2', selected: false }] },
      { type: SELECT_LIST_ITEM, payload: 1 },
    )).toEqual({ list: [{ name: 'Test', selected: false }, { name: 'Test 2', selected: true }] });
  });

  it('should select first item in array if array was selected', () => {
    expect(appReducers(
      { list: [{ name: 'Test' }, [{ name: 'Test 2.1' }, { name: 'Test 2.2' }, { name: 'Test 2.3' }]] },
      { type: SELECT_LIST_ITEM, payload: 1 },
    )).toEqual({
      list: [
        { name: 'Test', selected: false },
        [{ name: 'Test 2.1', selected: true }, { name: 'Test 2.2' }, { name: 'Test 2.3' }],
      ],
    });
  });

  it('should deselect first item in array also', () => {
    expect(appReducers(
      { list: [{ name: 'Test' }, [{ name: 'Test 2.1', selected: true }, { name: 'Test 2.2' }, { name: 'Test 2.3' }]] },
      { type: SELECT_LIST_ITEM, payload: 0 },
    )).toEqual({
      list: [
        { name: 'Test', selected: true },
        [{ name: 'Test 2.1', selected: false }, { name: 'Test 2.2' }, { name: 'Test 2.3' }],
      ],
    });
  });
});
