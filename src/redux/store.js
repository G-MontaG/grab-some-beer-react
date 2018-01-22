import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import apiReducers from './reducers/api.reducers';
import apiMiddlewares from './middlewares/api.middlewares';
import errorReducer from './reducers/error.reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    searchResults: apiReducers,
    error: errorReducer,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export { store as default };

sagaMiddleware.run(apiMiddlewares);
