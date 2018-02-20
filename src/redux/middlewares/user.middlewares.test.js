import { put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { setUserLocationCreator, SET_USER_LOCATION_SUCCEEDED, SET_USER_LOCATION_FAILED } from '../actions/user.actions';
import setUserLocationMiddleware, { location } from './user.middlewares';


const setUserLocationAction = setUserLocationCreator();

describe('user middleware', () => {
  const generator = cloneableGenerator(setUserLocationMiddleware)(setUserLocationAction);

  // it('should try to get geolocation', () => {
  //   expect(generator.next().value).toEqual(location);
  // });

  // it('if everything is ok should return geodata', () => {
  //   const clone = generator.clone();
  //   location.then(() => {
  //     expect(clone.next().value).toEqual(put({
  //       type: SET_USER_LOCATION_SUCCEEDED,
  //       payload: {
  //         latitude: result.coords.latitude,
  //         longitude: result.coords.longitude,
  //       },
  //     }));
  //     expect(clone.next().done).toEqual(true);
  //   });
  // });

  // it('if everything is bad should return error', () => {
  //   const clone = generator.clone();
  //   expect(clone.throw(new Error('Test')).value).toEqual(put({
  //     type: SET_USER_LOCATION_FAILED,
  //     payload: new Error('Test'),
  //   }));
  //   expect(clone.next().done).toEqual(true);
  // });
});
