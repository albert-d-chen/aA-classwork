import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkMiddleware from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
  // const store = createStore(rootReducer, preloadedState);
  // store.subscribe(() => {
  //   localStorage.state = JSON.stringify(store.getState());
  // });
  // return store;
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
}

export default configureStore;
