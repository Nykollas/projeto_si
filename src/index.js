import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './assets/styles/css/style.css';
import App from './App';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';

console.log('public url: ', process.env.PUBLIC_URL)

const store = createStore(reducers)


ReactDOM.render(<Provider store={store}>
                      <App ></App>
                </Provider>,
                document.getElementById('root'));

serviceWorker.unregister();
