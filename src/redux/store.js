import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import apiReducers from './reducers/api.reducers';
import errorReducer from './reducers/error.reducer';
import userReducers from './reducers/user.reducers';
import middlewares from './middlewares';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    searchResults: apiReducers,
    error: errorReducer,
    user: userReducers,
    form: formReducer,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export { store as default };

sagaMiddleware.run(middlewares);
