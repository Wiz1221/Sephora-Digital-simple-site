import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { routerReducer, routerMiddleware } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';

// Reducers
import UserReducer from '../Reducers/UserReducer';

export let initStore = () => {

  const reducer = combineReducers({
    user: UserReducer,
  });

  const store = createStore( reducer,
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ) )

  return store;
}
