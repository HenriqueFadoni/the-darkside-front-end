import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/main.scss';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import authReducer from './store/reducers/authReducer';

// Fonts
import './assets/fonts/arciform.otf';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  authReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
