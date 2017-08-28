import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import App from './components/App/App';

// Import CSS
import './index.css';
import './animation.css';

// Redux
import { Provider } from 'react-redux';
import { initStore } from './store/Store';

const store = initStore();

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
