import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home';
// import { Router, browserHistory } from 'react-router';
// import routes from './routes';

// props are passed down to App.js from here
let root = document.getElementById('app');
render(
  <div>
    <Home />
  </div>,
  root);
// render(<Router history={browserHistory} routes={routes} />, root);
