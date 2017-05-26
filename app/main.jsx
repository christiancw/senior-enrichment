'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import App from './components/App';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Students from './components/Students';
import Campuses from './components/Campuses';
import OneCampus from './components/SingleCampus';
import OneStudent from './components/SingleStudent';

import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';

render (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={ Home } />
        <Route path="/students" component={ Students } />
          <Route path="/students/:studentId" component={ OneStudent } />
        <Route path="/campuses" component={ Campuses } />
        <Route path="/campuses/:campusId" component={ OneCampus } />
    </Route>
  </Router>,
  document.getElementById('main')
);
