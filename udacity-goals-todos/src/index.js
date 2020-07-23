import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectedApp from './components/App'; 
import reducer from './reducers';  // import default output from ./reducers/index.js
import middleware from './middleware';  // import default output from ./middleware/index.js
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
      <ConnectedApp />
  </Provider>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
