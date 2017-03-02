import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
require('./favicon.ico');
require('./assets/kailey_social.png');

let root = document.getElementById('app');
render(<Router history={hashHistory} routes={routes} />, root);
