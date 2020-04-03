import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './assets/styles/css/style.css';
import App from './App';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';


const store = createStore(reducers)

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(<Provider store={store}>
                      <App ></App>
                </Provider>,
                document.getElementById('root'));

serviceWorker.unregister();
