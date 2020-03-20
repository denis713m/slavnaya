import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware             from 'redux-saga';
import rootReducer                      from './../reducers';
import rootSaga                         from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore( rootReducer, sagaMiddleware );
  sagaMiddleware.run( rootSaga );
  return store;
};

export default configureStore();

