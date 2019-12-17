import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'normalize.css';

import App from './scripts';
import rootReducer from './scripts/reducers';

import * as serviceWorker from './serviceWorker';

import './styles/index.scss';


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store as any}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
