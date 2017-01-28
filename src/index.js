import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './containers/Contact';
// import { Router, browserHistory } from 'react-router';
// import routes from './routes';

// props are passed down to App.js from here
let root = document.getElementById('app');
render(
  <div>
    <Header />
    <Home />
    <About />
    <Work />
    <Contact />
  </div>
  , root);
// render(<Router history={browserHistory} routes={routes} />, root);
