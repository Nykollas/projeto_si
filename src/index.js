import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './assets/styles/css/style.css';
import App from './App';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import config from './config_firebase';

firebase.initializeApp(config)

const store = createStore(reducers)

ReactDOM.render(<Provider store={store}>
                      <App ></App>
                </Provider>,
                document.getElementById('root'));

serviceWorker.unregister();
