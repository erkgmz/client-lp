import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import NotFound from './components/NotFound';
import Contact from './components/contact/Contact';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
    <Route path="/contact" component={Contact} />
    <Route path="/*" component={NotFound} />
  </Route>
);
