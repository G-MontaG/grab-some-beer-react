import { createStore } from 'redux';
import { apiReducers } from './reducers/api.reducers';

const store = createStore(apiReducers);
export { store as default };
