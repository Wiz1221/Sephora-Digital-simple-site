import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Import components
import App from './components/App/App';

// Import CSS
import './index.css';

// Redux
import { Provider } from 'react-redux';
import { initStore } from './store/store';

const store = initStore();



ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
