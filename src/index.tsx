import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';

import App from './scripts';
import * as serviceWorker from './serviceWorker';

import './styles/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
