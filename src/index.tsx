import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/main.scss';
import * as serviceWorker from './serviceWorker';

// Fonts
import './assets/fonts/arciform.otf';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
