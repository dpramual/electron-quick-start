import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import AppWindow from './AppWindow';

render((
  <Router history={hashHistory}>
    <Route path="/" component={AppWindow}/>
  </Router>
), document.getElementById('root'));