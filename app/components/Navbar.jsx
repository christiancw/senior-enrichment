import React, { Component } from 'react';
import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';


export default function Navbar (){
  return (
    <div>
      <Link to="/">  HOME  </Link>
      <Link to="/campuses">  CAMPUSES  </Link>
      <Link to="/students">  STUDENTS  </Link>
      <h3>yooooo Navbar here!</h3>
    </div>
  )
}
