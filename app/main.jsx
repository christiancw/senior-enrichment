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

import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';

// function Home (){
//   return (
//     <div>
//       <h3>hello from Home</h3>
//     </div>
//   )
// }

render (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/home" component={ Home } />
      <Route path="/navbar" component={ Navbar } />
      <Route path="/students" component={ Students } />
      <Route path="/campuses" component={ Campuses } >
        <Route path=":campusId" component={ OneCampus } />
      </Route>
    </Route>
  </Router>,
  document.getElementById('main')
);
