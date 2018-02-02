import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import apiReducers from './reducers/api.reducers';
import errorReducer from './reducers/error.reducer';
import userReducers from './reducers/user.reducers';
import middlewares from './middlewares';
import appReducers from './reducers/app.reducers';
import { loadState, saveState } from '../services/localStorage';

const presistedState = loadState();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    searchResults: apiReducers,
    app: appReducers,
    error: errorReducer,
    user: userReducers,
    form: formReducer,
  }),
  presistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
export { store as default };

sagaMiddleware.run(middlewares);

store.subscribe(() => saveState({
  app: store.getState().app,
  user: store.getState().user,
}));
