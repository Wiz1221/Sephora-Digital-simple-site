import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import submitReducer from '../reducers/submitReducer';
import formReducer from '../reducers/formReducer';

export let initStore = () => {

  const reducer = combineReducers({
    submit: submitReducer,
    form: formReducer
  });

  const store = createStore( reducer,
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ) )

  return store;
}
