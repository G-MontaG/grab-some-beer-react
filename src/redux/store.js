import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import apiReducers from './reducers/api.reducers';
import apiMiddlewares from './middlewares/api.middlewares';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(apiReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
export { store as default };

sagaMiddleware.run(apiMiddlewares);
